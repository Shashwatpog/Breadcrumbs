import { format } from "date-fns";
import { useMemo } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import useFollow from "@/hooks/useFollow";

import Button from "../Button";
import useEditModal from "@/hooks/useEditModal";

import { BiCalendar } from "react-icons/bi";

interface UserBioProps {
    userId: string;
}


const UserBio: React.FC<UserBioProps> = ({ userId }) => {
    const { data: currentUser } = useCurrentUser();
    const { data: fetchedUser } = useUser(userId);

    const editModal =  useEditModal();

    const { isFollowing, toggleFollow } = useFollow(userId);

    const createdAt =  useMemo(() => {
        if (!fetchedUser?.createdAt) {
            return null;
        }

        return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
    }, [fetchedUser?.createdAt]);

    return (
        <div className="border-b-[2px] border-orange-300 pb-4">

            <div className="flex justify-end p-2">
                {currentUser?.id === userId ? (
                    <Button secondary fullHeight label="Edit" onClick={editModal.onOpen}/>
                ): (
                    <Button 
                        onClick = {toggleFollow} 
                        label = {isFollowing ? 'Unfollow' : 'Follow'}
                        secondary={!isFollowing}
                        outline={isFollowing}
                        fullHeight />
                )}

            </div>
            <div className = "mt-8 px-4">
                <div className = "flex flex-col">
                    <p className = "text-rose-400 text-2xl font-semibold">
                        {fetchedUser?.name}
                    </p>
                    <p className = "text-md text-rose-300">
                        @{fetchedUser?.username}
                    </p>
                </div>
                <div className = "flex flex-col mt-4">
                    <p className = "text-orange-400">
                        {fetchedUser?.bio}
                    </p>
                    <div className = "flex flex-row items-center gap-2 mt-4 text-rose-400">
                        <BiCalendar size = {24}/>
                        <p>
                            Baked on {createdAt}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-center mt-4 gap-6">
                    <div className="flex flex-row items-center gap-1">
                        <p className="text-orange-300 text-semibold">
                            {fetchedUser?.followingIds?.length}
                        </p>
                        <p className="text-rose-300">
                            Bakers following
                        </p>
                    </div>

                    <div className="flex flex-row items-center gap-1">
                        <p className="text-orange-300 text-semibold">
                            {fetchedUser?.followersCount || 0}
                        </p>
                        <p className="text-rose-300">
                            Baker followers
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default UserBio;