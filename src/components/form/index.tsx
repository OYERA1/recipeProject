'use client'

import Link from 'next/link'
import Input from '@/components/input'

import { FormSubmitButton } from '@/components/buttons'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { IForm, IUser } from 'types/interfaces'
import { cms, initialValue } from '@/lib/functions'

export default function Form({ toggleModal, formType }: IForm) {
    // Declarando variaveis
    const value = initialValue(formType)
    const { cta, inputs } = cms(formType)

    // Setando estados para formulário
    const [userData, setUserData] = useState<IUser>(value)
    const [match, setMatch] = useState<boolean | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Funções para onChange e onSubmit
    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        setIsLoading(true)
        if (formType === 'login') {
            console.log('login')
        } else {
            try {
                const { name, email, password } = userData
                const req = await fetch('api/users', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password
                    })
                })
                const res = await req.json()

                setUserData(value)
                setIsLoading(false)
                console.log(res)
                if (!res.ok) console.log(res.error)
            } catch (e) {
                console.log({ message: 'Server error: ', e })
            }
        }
        setIsLoading(false)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const inputName = e.target.name
        const value = e.target.value
        setUserData(prev => ({ ...prev, [inputName]: value }))
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
                            name={name}
                            type={type}
                            title={title}
                            autoCorrect="off"
                            disabled={isLoading}
                            autoCapitalize="none"
                            onChange={handleChange}
                            placeholder={placeholder}
                            value={userData[name as keyof IUser]}
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

                <FormSubmitButton formType={formType} disabled={isLoading} />
            </div>
        </form>
    )
}
