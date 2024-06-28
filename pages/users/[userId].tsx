import Header from "@/components/Header";
import useUser from '@/hooks/useUser'
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import UserHero from "@/components/users/UserHero";
import UserBio from "@/components/users/UserBio";

const UserView = () => {
    const router =  useRouter();
    const { userId } = router.query;

    const { data: fetchedUser, isLoading } = useUser(userId as string);

    if (isLoading || !fetchedUser) {
        return(
            <div className = "flex justify-center items-center h-full">
                <ClipLoader color = "magenta" size = {80}/>
            </div>
        )
    }

    return(
        <>
            <Header showBackArrow label = {fetchedUser?.name} />
            <UserHero userId = {userId as string}/>
            <UserBio userId = {userId as string}/>
            
        </>
    )
}

export default UserView;