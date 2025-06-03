import { FiSearch } from 'react-icons/fi';
export default function SearchForm(){
    return(
        <form 
            onSubmit={(e) =>e.preventDefault()} 
            className="
            flex flex-grow min-w-0
            md:mx-32
            lg:mx-48
            xl:mx-64
        ">
            <input type="text" name="text" id="text" placeholder='Buscar...'
            className="
            min-w-0 w-full p-2
            rounded-l-lg border-2 border-transparent
            bg-zinc-700 text-zinc-100
            focus:outline-none focus:border-primary-500
            " />
            <button className="
                min-w-0 p-2
                rounded-r-lg border-2 border-transparent
                bg-zinc-700 text-zinc-100
                focus:outline-none focus:border-primary-500 focus:text-primary-500
                hover:bg-zinc-600 transition-colors duration-100
                
                ">
                <FiSearch />
            </button>
        </form>
    );
}