'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface IToggle {
    isOpenModal: boolean
    toggleModal: () => void
}

const defaultValues = {
    isOpenModal: false,
    toggleModal: () => {}
}

const ToggleContext = createContext<IToggle>(defaultValues)

export default function ToggleContextProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
        console.log('teste')
    }


    return (
        <ToggleContext.Provider value={{ isOpenModal, toggleModal }}>
            {children}
        </ToggleContext.Provider>
    )
}

export const useModal = () => {
    return useContext(ToggleContext)
}
