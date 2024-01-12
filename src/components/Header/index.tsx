import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import logoImg from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return(
        <div> 
            <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
<<<<<<< HEAD
                    <NewTransactionButton> Nova transação (Teste new branch)</NewTransactionButton>
=======
                    <NewTransactionButton> Nova transação </NewTransactionButton>
>>>>>>> 2b78343853152db4667e319bdb0d82680029e680
                    </Dialog.Trigger>

                    <NewTransactionModal />

                
                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
        </div>
    )
}