import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from "react-icons/ai";
import React, { useCallback, useMemo } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import useLike from "@/hooks/useLike";

import Avatar from "../Avatar";

interface PostItemProps {
    data: Record<string, any>;
    userId?: string;
}

const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const { data: currentUser } = useCurrentUser();
    const { hasLiked, toggleLike } = useLike({ postId: data.id, userId })

    const goToUser = useCallback((event: any) => {
        event.stopPropagation();

        router.push(`/users/${data.user.id}`);
    }, [router, data.user.id]);

    const goToPost = useCallback(() => {
        router.push(`/posts/${data.id}`);
    }, [router, data.id]);

    const onLike = useCallback((event: any) => {
        event.stopPropagation();

        if (!currentUser) {
            return loginModal.onOpen();
        }

        toggleLike();
    }, [loginModal, currentUser, toggleLike]);

    const createdAt = useMemo(() => {
        if (!data?.createdAt) {
            return null;
        }

        return formatDistanceToNowStrict(new Date(data.createdAt));
    }, [data?.createdAt]);

    const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;
   
    return (
        <div onClick={goToPost} className="border-b-[2px] border-orange-300 p-5 cursor-pointer hover:bg-rose-100 transition">
            <div className="flex flex-row items-start gap-3">
                <Avatar userId={data.user.id}/>
                <div>
                    <div className="flex flex-row items-center gap-2">
                        <p onClick={goToUser} className="text-rose-400 font-semibold cursor-pointer hover:underline">{data.user.name}</p>
                        <span onClick={goToUser} className="text-rose-300 cursor-pointer hover:underline hidden md:block">@{data.user.username}</span>
                        <span className="text-rose-300 text-sm">{createdAt}</span>
                    </div>
                    <div className="text-orange-500 mt-1">
                        {data.body}
                    </div>
                    <div className="flex flex-row items-center mt-3 gap-10">
                        <div className="flex flex-row items-center text-rose-400 gap-2 cursor-pointer transition hover:text-orange-400">
                            <AiOutlineMessage size={25}/>
                            <p>{data.comments?.length || 0}</p>
                        </div>
                        <div onClick={onLike} className="flex flex-row items-center text-rose-400 gap-2 cursor-pointer transition hover:text-orange-400">
                            <LikeIcon size={25} color={hasLiked ? 'pink' : ''} />
                            <p>{data.likedIds.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem;