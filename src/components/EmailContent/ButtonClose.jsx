import {FiX} from "react-icons/fi";
export default function ButtonClose({onClick}){
    return(
        <>
            <div className="flex items-end justify-end">
                <button onClick={onClick} className="flex items-end bg-primary-600 hover:bg-primary-500 rounded-md p-2 transition-colors mb-2">
                    <FiX className="inline mb-1 sm:mr-1"/>
                    <span>Fechar</span>
                </button>
            </div>

        </>
    );
}