export default function Avatar({letter}){
    return(
        <>
            <div className="
            rounded-full bg-sky-600
            w-10 h-10 grid place-content-center
            ">
                <span className="mb-1">
                    {letter}
                </span>
            </div>
        </>
    );
}