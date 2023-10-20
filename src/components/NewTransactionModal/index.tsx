import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from './styles';
import { X } from 'phosphor-react';

export function NewTransactionModal () {
    return (
        <div>
            <Dialog.Portal>
                    <Overlay />
                    <Content>
                        <Dialog.Title> Nova Transação </Dialog.Title>

                        <form action="">
                            <input type="text" placeholder='Decrição' required />
                            <input type="number" placeholder='Preço' required />
                            <input type="text" placeholder='Categoria' required />

                            <button type="submit">
                                Cadastrar
                            </button>
                        </form>

                        <CloseButton>
                            <X size={24} />
                        </CloseButton>
                        
                    </Content>
                </Dialog.Portal>
        </div>
    )
}