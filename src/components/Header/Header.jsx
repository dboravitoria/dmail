import Logo from "./Logo";
import Avatar from "./Avatar";
import SearchForm from "./SearchForm";
export default function Header(){
    return(
        <>
            <header className="
                px-4 py-2 h-16 
                flex items-center justify-between
                bg-white dark:bg-zinc-900
                shadow-sm dark:shadow-none
                text-zinc-900 dark:text-white
            ">
                <Logo/>
                <SearchForm/>
                <Avatar/>
            </header>
        </>
    );
}
