import emails from '../../emails.json'
import EmailListItem from './EmailListItem';

export default function EmailList({setOpenEmail}){
    return(
        <>
            <div className='relative grow overflow-y-scroll max-h-[calc(100vh-80px)] mt-2'>
                {emails.map(email => (
                    <EmailListItem key={email.id} 
                    email={email} 
                    onClick={() => setOpenEmail(email)}/>  
                ))}
            </div>
        </>

    );
}