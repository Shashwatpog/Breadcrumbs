import { useCallback, useState } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import usePost from "@/hooks/usePost";
import usePosts from "@/hooks/usePosts";
import useRegisterModal from "@/hooks/useRegisterModal";

import axios from "axios";
import toast from "react-hot-toast";
import Button from "./Button";
import Avatar from "./Avatar";

interface FormProps {
    placeholder: string;
    isComment?: boolean;
    postId?: string;
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    const { data: currentUser } = useCurrentUser();
    const { mutate: mutatePosts } = usePosts();
    const { mutate: mutatePost } = usePost(postId as string);

    const [ body, setBody ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            const url = isComment ? `/api/comments?postId=${postId}` : '/api/posts';

            await axios.post(url, { body });

            toast.success('Loaf Baked!');
            
            setBody('');
            mutatePosts();
            mutatePost();
        } catch (error) {
            toast.error('OOPS! Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }, [body, mutatePosts, isComment, postId, mutatePost]);

    return (
        <div className="border-b-[4px] border-orange-200 px-5 py-2">
            {currentUser ? (
                <div className="flex flex-row gap-4">
                    <div>
                        <Avatar userId={currentUser?.id} />
                    </div>
                    <div className="w-full">
                        <textarea
                            disabled={isLoading}
                            onChange={(e) => setBody(e.target.value)}
                            value={body}
                            className="disabled:opacity-80 peer resize-none mt-3 w-full bg-orange-50 ring-0 outline-none text-[20px] placeholder-orange-400 text-rose-400"
                            placeholder={placeholder}
                        ></textarea>
                        <hr className="opacity-0 peer-focus:opacity-100 h-[2px] w-full border-orange-50 transition" />
                        <div className="mt-4 flex flex-row justify-end">
                            <Button disabled={isLoading || !body} onClick={onSubmit} label="Bake" fullHeight secondary/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="py-4">
                    <h1 className="text-orange-400 text-2xl text-center mb-4 font-bold">Welcome to Bread Crumbs</h1>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <Button fullHeight label="Login" onClick={loginModal.onOpen} secondary/>
                        <Button fullHeight label="Register" onClick={registerModal.onOpen} secondary/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Form;