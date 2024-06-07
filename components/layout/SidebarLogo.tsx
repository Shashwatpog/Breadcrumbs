import { useRouter } from 'next/router';

const SidebarLogo = () => {
    const router = useRouter();


    return (
        <div 
            onClick={() => router.push("/")}
            className = "rounded-full h-28 w-28 p-4 flex items-center justify-center hover:bg-black-300 cursor-pointer transition">
                <img src = "/logo.png" alt = "logo"/>
        </div>
    );
}

export default SidebarLogo