import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

import SidebarLogo from "../layout/SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
const Sidebar = () => {

    const { data: currentUser } = useCurrentUser();

    const items = [
        {
            label: "Bread Oven",
            href: "/",
            icon: BsHouseFill
        },
        {
            label: "Bread Bells",
            href: "/notifications",
            icon: BsBellFill,
            auth:  true,
            alert: currentUser?.hasNotification,
        },
        {
            label: "Pantry",
            href: `/users/${currentUser?.id}`,
            icon: FaUser,
            auth: true
        },



    ]
    return (
        <div className = "col-span-1 h-full pr-4 md:pr-6 bg-orange-100">
            <div className = "flex flex-col items-center">
                <div className = "space-y-2 lg:w=[230px]">
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            key = {item.href}
                            href = {item.href}
                            label = {item.label}
                            icon = {item.icon}
                            auth = {item.auth}
                            alert = {item.alert}
                            />
                    ))}
                    { currentUser && (
                        <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />
                    )}
                    <SidebarTweetButton  />
                </div>
            </div>


        </div>
    );
}

export default Sidebar