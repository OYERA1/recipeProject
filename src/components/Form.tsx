'use client'

import Link from 'next/link'
import Input from '@/components/Input'
import { useForm } from 'react-hook-form'
import { IForm, IUserLogin, IUserRegister } from 'interfaces'
import { usePathname } from 'next/navigation'
import { cms, initialValue } from '@/lib/functions'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSubmitButton } from '@/components/Buttons'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { userSchema } from '@/lib/zod-schema'
import { ZodError } from 'zod'

export default function Form({ className }: IForm) {
    // Declarando variaveis
    const router = usePathname().replace('/', '') as 'login' | 'register'
    const schema = userSchema(router)
    const { cta, inputs } = cms(router)

    // Setando estados para formulário
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IUserLogin | IUserRegister>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(schema)
    })
    // Funções para onChange e onSubmit

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        // setUserData(prev => ({ ...prev, [name]: value }))
    }

    function handleForm(data: IUserLogin | IUserRegister) {
        try {
            const result = schema.parse(data)
            console.log({ result })
        } catch (e) {
            if (e instanceof ZodError) {
                console.error(e.flatten())
            }
        }
    }

    return (
        <form
            className={`flex flex-col justify-center items-center h-full relative bg-white rounded-md cursor-auto ${className}`}
            onSubmit={handleSubmit(handleForm)}
        >
            <h1 className="mt-4 font-bold text-2xl">{cta}</h1>
            <div>
                {inputs.map(({ type, id, name, label, placeholder }) => (
                    <Input
                        // disabled={isLoading}
                        autoCorrect="off"
                        error={!!errors}
                        helperText={errors}
                        key={id}
                        label={label}
                        name={name}
                        onChange={handleChange}
                        placeholder={placeholder}
                        register={register}
                        type={type}
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

            <FormSubmitButton
                formType={router} // disabled={isLoading}
            />

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
