'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

interface ITeste {
    teste: string
    setTeste: (newValue: string) => void
}
const firstValue = {
    teste: '',
    setTeste: () => ''
}

const TesteContext = createContext<ITeste>(firstValue)

export default function TesteContextProvider({
    children
}: {
    children: ReactNode
}) {
    const [teste, setTeste] = useState('')
    return (
        <TesteContext.Provider value={{ teste, setTeste }}>
            {children}
        </TesteContext.Provider>
    )
}

export const useTeste = () => {
    return useContext(TesteContext)
}
