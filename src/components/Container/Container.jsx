export default function Container({ children }) {
    return (
        <div className="
            bg-zinc-800 text-zinc-100
            px-2 pb-2 xl:px-6 xl:pb-4
            min-h-screen
            ">
                {children}
        </div>
    );
}