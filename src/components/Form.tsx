'use client'

import Link from 'next/link'
import Input from '@/components/Input'

import { FormSubmitButton } from '@/components/Buttons'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { IForm, IUser } from 'types/interfaces'
import { cms, initialValue } from '@/lib/functions'
import { usePathname } from 'next/navigation'

export default function Form({ className }: IForm) {
    // Declarando variaveis
    const router = usePathname().replace('/', '') as 'login' | 'register'
    const value = initialValue(router)
    const { cta, inputs } = cms(router)

    // Setando estados para formulário
    const [userData, setUserData] = useState<IUser>(value)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Funções para onChange e onSubmit

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setUserData(prev => ({ ...prev, [name]: value }))
    }

    console.log(userData)

    return (
        <form
            className={`flex flex-col justify-center items-center h-full relative bg-white rounded-md cursor-auto ${className}`}
            onSubmit={() => console.log(userData)}
        >
            <h1 className="mt-4 font-bold text-2xl">{cta}</h1>
            <div>
                {inputs.map(({ type, id, name, label, placeholder }) => (
                    <Input
                        key={id}
                        name={name}
                        type={type}
                        label={label}
                        autoCorrect="off"
                        disabled={isLoading}
                        onChange={handleChange}
                        placeholder={placeholder}
                    />
                ))}
                {router === 'login' && (
                    <div className="flex items-center justify-between gap-4 w-full overflow-hidden">
                        <Link
                            className="text-sm underline text my-2"
                            href={'/register'}
                        >
                            Registrar-se!
                        </Link>
                    </div>
                )}
            </div>

            <FormSubmitButton formType={router} disabled={isLoading} />

            {router === 'register' && (
                <Link
                    className="text-sm hover:underline text my-2"
                    href={'/login'}
                >
                    <p>
                        Já tem uma conta?{' '}
                        <strong className="text-orange-700">Entrar!</strong>
                    </p>
                </Link>
            )}
        </form>
    )
}
