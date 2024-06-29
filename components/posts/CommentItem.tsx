import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Avatar from "../Avatar";

interface CommentItemProps {
    data: Record<string, any>
};

const CommentItem: React.FC<CommentItemProps> = ({ data }) => {
    const router = useRouter();

    const goToUser = useCallback((event: any) => {
        event.stopPropagation();

        router.push(`/users/${data.user.id}`);
    }, [router, data.user.id]);

    const createdAt = useMemo(() => {
        if (!data?.createdAt) {
            return null;
        }

        return formatDistanceToNowStrict(new Date(data.createdAt));
    }, [data?.createdAt]);

    return (
        <div className="border-b-[2px] border-orange-300 p-5 cursor-pointer hover:bg-rose-100 transition">
            <div className="flex flex-row items-start gap-3">
                <Avatar userId={data.user.id} />
                <div>
                    <div className="flex flex-row items-center gap-2">
                        <p onClick={goToUser} className="text-rose-400 font-semibold cursor-pointer hover:underline">
                            {data.user.name}
                        </p>
                        <span className="text-rose-300 cursor-pointer hover:underline hidden md:block">
                            @{data.user.username}
                        </span>
                        <span className="text-rose-300 text-sm">
                            {createdAt}
                        </span>
                    </div>
                    <div className="text-orange-500 mt-1">
                        {data.body}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentItem;