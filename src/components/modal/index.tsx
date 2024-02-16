import Form from '../login'
import { IModal } from 'types/interfaces'
import { MouseEvent } from 'react'

export default function Modal({ toggleModal }: IModal) {
    // Ao clicar fora do modal, ele é fechado
    const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget && toggleModal) {
            toggleModal()
        }
    }
    return (
        <div
            className="fixed flex items-center justify-center backdrop-blur-md bg-black/30 h-screen w-screen hover:cursor-pointer overscroll-none z-20"
            onMouseDown={handleClickOutside}
        >
            <Form toggleModal={toggleModal} type="login" />
        </div>
    )
}
