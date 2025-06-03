import {FiEdit3, FiSend, FiInbox, FiFileText, FiArchive, FiAlertCircle, FiTrash2} from'react-icons/fi'
import WriteButton from "./WriteButton";
import Button from './Button';

const inlineIcon = 'inline-block mr-2';
export default function Sidebar() {
    return(
        <>
            <aside className="flex sm:hidden md:inline md:flex-col mt-4 w-64 h-fit bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-md dark:shadow-none rounded-lg p-4">
                <WriteButton>
                    <FiEdit3 className={inlineIcon} />
                    Escrever
                </WriteButton>
                <Button>
                    <FiSend className={inlineIcon} />
                    Caixa de Entrada
                </Button>
                <Button>
                    <FiInbox className={inlineIcon} />
                    Enviados
                </Button>
                <Button>
                    <FiFileText className={inlineIcon} />
                    Rascunhos
                </Button>
                <Button>
                    <FiArchive className={inlineIcon} />
                    Arquivos
                </Button>
                <Button>
                    <FiAlertCircle className={inlineIcon} />
                    Spam
                </Button>
                <Button>
                    <FiTrash2 className={inlineIcon} />
                    Lixeira
                </Button>
            </aside>
        </>
    );
}