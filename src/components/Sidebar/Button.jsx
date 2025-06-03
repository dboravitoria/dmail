export default function Button({ children }) {
    return (
        <button className="
        block w-full text-left px-4 py-2 mt-2 rounded-lg
      hover:bg-zinc-200 dark:hover:bg-zinc-700 
        transition-colors focus:outline-none focus:ring-1 focus:ring-primary-500 focus:ring-offset-2  dark:focus:ring-offset-zinc-800
        ">
            {children}
        </button>
    );
}