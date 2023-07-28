import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
    const router = useRouter();

    return (
        <div onClick={() => router.push('/')}>
            <div
                className="
        mt-6
        lg:hidden 
        rounded-full h-14 w-14 flex items-center justify-center p-4
        bg-sky-500
        hover:bg-opacity-80 cursor-pointer transition"
            >
                <FaFeather size={24} color="white" />
            </div>
            <div className="
            mt-6
            hidden
            lg:block
            rounded-full
            px-4 py-2
            bg-sky-500
            hover:bg-opacity-90
            cursor-pointer
            transition
            ">
                <p className="hidden lg:block text-center font-semibold 
                text-white text-[20px]">Carita</p>
            </div>
        </div>
    )
}

export default SidebarTweetButton
