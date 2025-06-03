import ButtonClose from "./ButtonClose";
export default function EmailContent({email, setOpenEmail}){
    if (!email) {
    return (
      <div className="flex-1 flex justify-center items-center text-zinc-500">
        <p>Selecione um e-mail para visualizar o conteúdo.</p>
      </div>
    );
  }
  if (!email) {
  return (
    <div className="flex-1 flex justify-center items-center text-zinc-500">
      <p>Selecione um e-mail para visualizar o conteúdo.</p>
    </div>
  );
}
  const emailDiv = 'text-zinc-400'
  const date = new Date(email.createdAt)
  const emailDate = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
    return(
        <>
            <div className="
            p-8 md:p-8 sm:mt-20 md:mt-4 absolute sm:-ml-2 md:ml-0 lg:relative h-screen w-screen
            bg-zinc-600 grow-[2] basis-96 rounded-md
            ">
              <ButtonClose onClick={() => setOpenEmail(null)}/>
                <h2 className="text-2xl font-bold mb-2">{email.subject}</h2>
                <div className={emailDiv}>De: {`<${email.from}>`}</div>
                <div className={emailDiv}>Para: {`<john.doe@email.com>`}</div>
                <div className={emailDiv}>Em: {emailDate}</div>
                <hr className="my-4"/>
                <div className="font-semibold">{email.body}</div>
                
            </div>
            
        </>
    );
}