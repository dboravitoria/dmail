export default function Avatar() {
    return(
        <>
            <img src="/user.svg" alt="usuario" className="
                min-w-0 m-6
                rounded-full
                border-2 border-primary-600
                hover:border-primary-500
            " width={48} height={48}/>
        </>
    );
}