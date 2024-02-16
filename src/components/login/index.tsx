'use client'

import Link from 'next/link'
import Input from '@/components/input'
import inputs from '@/lib/fakecms/inputs'

import { FormSubmitButton } from '../buttons/page'
import {
    ChangeEvent,
    FormEvent,
    SyntheticEvent,
    useEffect,
    useState
} from 'react'
import { IError, IForm, IUser } from 'types/interfaces'
import { cms, initialValue } from '@/lib/functions'

export default function Form({ toggleModal, type }: IForm) {
    const value = initialValue(type)
    const { cta, inputs } = cms(type)
    const [userData, setUserData] = useState(value)
    const [match, setMatch] = useState<boolean | null>(null)

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name
        const value = e.target.value
        setUserData(prevState => ({ ...prevState, [inputName]: value }))
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        console.log(userData)
    }

    return (
        <form
            className="flex flex-col relative bg-white rounded-md w-1/2 h-max py-4 cursor-auto"
            onSubmit={handleSubmit}
        >
            <button
                className="flex items-center justify-center absolute w-4 h-4 right-0 m-2 hover:bg-slate-400/25 duration-100 font-light rounded-full"
                type="button"
                onClick={toggleModal}
            >
                x
            </button>

            <div className="mt-10">
                <h1 className="text-center mt-4 font-bold text-2xl">{cta}</h1>
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center">
                <div className="flex flex-col justify-center w-1/2 ">
                    {inputs.map(({ type, id, name, title, placeholder }) => (
                        <Input
                            key={id}
                            type={type}
                            name={name}
                            title={title}
                            placeholder={placeholder}
                            onChange={handleOnChange}
                        />
                    ))}
                    <div className="flex items-center justify-between gap-4 w-full overflow-hidden">
                        <Link
                            className="text-sm underline text my-2"
                            href={'/register'}
                        >
                            Registrar-se!
                        </Link>
                    </div>
                </div>

                <FormSubmitButton type={type} />
            </div>
        </form>
    )
}
