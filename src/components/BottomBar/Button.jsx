export default function Button({active, onClick, children }) {
    return (
        <button className=
        {`flex-1 p-2 mb-1 rounded-lg shadow-md
        text-zinc-900 dark:text-zinc-50
        ${active ? 'bg-primary-300 dark:bg-primary-600' : 'bg-zinc-200 dark:bg-zinc-900'}`}
        onClick={onClick}
        >
            {children}
        </button>
    );
}