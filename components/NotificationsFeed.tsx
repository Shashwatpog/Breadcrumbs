import { useEffect } from "react";
import Image from 'next/image';
import useCurrentUser from "@/hooks/useCurrentUser";
import useNotifications from "@/hooks/useNotifications";

const NotificationsFeed = () => {
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
    const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

    useEffect(() => {
        mutateCurrentUser();
    }, [mutateCurrentUser]);

    if (fetchedNotifications.length === 0) {
        return (
            <div className="text-rose-200 text-center p-6 text-3xl text-bold">
                No Activity
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            {fetchedNotifications.map((notification: Record<string, any>) => (
                <div key={notification.id} className="flex flex-row items-center p-6 gap-4 border-b-[2px] border-orange-300">
                    <Image src = "/logo.png" alt = "logo" width={70} height={70} />
                    <p className="text-orange-400 font-semibold">
                        {notification.body}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default NotificationsFeed;