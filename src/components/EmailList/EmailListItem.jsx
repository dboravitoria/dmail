import Avatar from "./Avatar";
export default function EmailListItem({email, onClick}){
    return (
        <>
            <article 
            onClick={onClick}
            className="
            flex items-center gap-4 p-2 [&+article]:mt-2
            hover:cursor-pointer hover:bg-zinc-600 hover:rounded-lg
            transition-colors
            grow shrink basis-40
            ">
                <Avatar letter={email.from[0].toUpperCase()}/>
                <div>
                    <strong>{email.subject}</strong>
                    <p>{email.body.length > 64 ? email.body.slice(0, 64)+ '...' : email.body}</p>
                </div>
            </article>
        </>
    );
}