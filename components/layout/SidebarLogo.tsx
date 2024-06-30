import { useRouter } from 'next/router';
import Image from 'next/image';

const SidebarLogo = () => {
    const router = useRouter();


    return (
        <div 
            onClick={() => router.push("/")}
            className = "rounded-full h-28 w-28 p-4 flex items-center justify-center cursor-pointer transition">
                <Image src = "/logo.png" alt = "logo"/>
        </div>
    );
}

export default SidebarLogo