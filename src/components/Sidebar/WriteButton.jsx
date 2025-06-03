export default function WriteButton({ children }) {
    return (
        <button className="bg-primary-600 hover:bg-primary-500 p-2 w-full rounded-lg transition-colors">
            {children}
        </button> 
    );
}