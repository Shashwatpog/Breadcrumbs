import { useRouter } from "next/router"
import { BsPatchPlusFill } from "react-icons/bs";
import useLoginModal from "@/hooks/useLoginModal"
import { useCallback } from "react";

const SidebarTweetButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const onClick = useCallback(() => {
        loginModal.onOpen()
    },[loginModal]);

    return(
        <div onClick = {onClick}>
            <div className="
                mt-6
                lg:hidden
                rounded-full
                h-14
                w-14
                p-4
                flex
                items-center
                justify-center
                bg-orange-100
                hover:bg-opacity-80
                hover:bg-white
                transition
                cursor-pointer">
                    <BsPatchPlusFill size = {24} color = "rgb(219 39 119)"/>
                </div>
                <div className="
                    mt-6
                    hidden
                    lg:block
                    px-4
                    py-2
                    rounded-full
                    bg-rose-600
                    hover:bg-opacity-90
                    cursor-pointer
                    transition">
                        <p className="
                        hidden 
                        lg:block 
                        text-center
                        font-semibold
                        text-white 
                        text-[20px]">
                            Bake
                        </p>
                    </div>
        </div>
    )
}

export default SidebarTweetButton