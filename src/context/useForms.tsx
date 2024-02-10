'use client'

import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'

interface ICreateUser {
    payload: {
        name: string
        email: string
        password: string
    }
    setPayload: React.Dispatch<
        React.SetStateAction<{
            name: string
            email: string
            password: string
        }>
    >
}

const defaultValues = {
    payload: {
        name: '',
        email: '',
        password: ''
    },
    setPayload: () => {}
}
const CreateUserContext = createContext<ICreateUser>(defaultValues)

export const CreateUserProvider = ({ children }: { children: ReactNode }) => {
    const [payload, setPayload] = useState({
        name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        console.log(payload)
    }, [payload])
    return (
        <CreateUserContext.Provider value={{ payload, setPayload }}>
            {children}
        </CreateUserContext.Provider>
    )
}

export const useCreateUser = () => {
    return useContext(CreateUserContext)
}
