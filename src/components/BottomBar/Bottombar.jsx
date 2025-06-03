import { FiEdit3, FiInbox, FiFileText, FiX, FiMenu, FiArchive, FiAlertOctagon, FiTrash2 } from "react-icons/fi";
import Button from "./Button";
import { useState } from "react";

const inlineIcon = "inline mb-1 sm:mr-2"
const smOnlyText = "hidden sm:inline"

export default function Bottombar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="w-full flex justify-center items-center gap-2 relative sm:flex md:hidden  ">
                    <Button active>
                        <FiEdit3 className={inlineIcon}/>
                        <span className={smOnlyText}>Escrever</span>
                    </Button>
                    <Button>
                        <FiInbox className={inlineIcon}/>
                        <span className={smOnlyText}>Caixa de Entrada</span>
                    </Button>
                    <Button>
                        <FiFileText className={inlineIcon}/>
                        <span className={smOnlyText}>Rascunhos</span>
                    </Button>
                    <Button onClick={() => setIsMenuOpen(state => !state)}>
                    {isMenuOpen ? (
                        <>
                            <FiX className={inlineIcon}/>
                            <span className={smOnlyText}>Fechar</span>
                        </>
                    ) : (
                        <>
                            <FiMenu className={inlineIcon}/>
                            <span className={smOnlyText}>Mais</span>
                        </>
                    )}
                    </Button>
                    <div className={`${isMenuOpen ? "absolute" : "hidden"} right-0 bottom-16 flex flex-col gap-2 w-40`}>
                    <Button>
                        <FiArchive className={inlineIcon}/><span className={smOnlyText}>Arquivos</span>
                    </Button>
                    <Button>
                        <FiAlertOctagon className={inlineIcon}/><span className={smOnlyText}>Spam</span>
                    </Button>
                    <Button>
                        <FiTrash2 className={inlineIcon}/><span className={smOnlyText}>Lixeira</span>
                    </Button>
                    </div>
                    
                </div>
            </div>
        </>
    );
}