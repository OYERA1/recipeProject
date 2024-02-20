'use client'

import { FormSubmitButton } from '@/components/Buttons'
import { IForm, IUser, IUserLogin, IUserRegister } from 'interfaces'
import { submitLogin, submitRegister } from '@/lib/_actions'
import { useForm } from 'react-hook-form'
import { usePathname } from 'next/navigation'
import { userSchema } from '@/lib/zod-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '@/components/Input'
import Link from 'next/link'
import { useState } from 'react'
import { CtaToLogin, CtaToRegister } from './CtaForm'

export default function Form({ className }: IForm) {
    const [isLoading, setIsLoading] = useState(false)

    // Declarando variaveis
    const router = usePathname().replace('/', '') as 'login' | 'register'
    const schema = userSchema(router)

    // Setando estados para formulário
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm<IUser>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(schema)
    })

    async function handleForm(data: IUserLogin | IUserRegister) {
        // switch (router) {
        //     case 'login':
        //         submitLogin(data)
        //         reset()
        //         break
        //     case 'register':
        //         submitRegister(data)
        //         reset()
        //         break
        // }
        setIsLoading(true)
        console.log({ antes: data })
        await new Promise(resolve => setTimeout(resolve, 5000))
        setIsLoading(false)
        console.log({ depois: data })
    }

    return (
        <form
            className={`flex flex-col justify-center items-center h-full relative bg-white rounded-md cursor-auto ${className}`}
            onSubmit={handleSubmit(handleForm)}
        >
            <h1 className="mt-4 font-bold text-2xl">
                {router === 'login' && 'Faça seu login!'}
                {router === 'register' && 'Crie sua conta!'}
            </h1>
            <div>
                {router === 'register' && (
                    <Input
                        disabled={isLoading}
                        name="name"
                        register={register}
                        errors={errors.name?.message}
                    />
                )}
                <Input
                    name="email"
                    disabled={isLoading}
                    register={register}
                    errors={errors.email?.message}
                />
                <Input
                    name="password"
                    disabled={isLoading}
                    register={register}
                    errors={errors.password?.message}
                />
                {router === 'register' && (
                    <Input
                        disabled={isLoading}
                        name="confirmPassword"
                        register={register}
                        errors={errors.confirmPassword?.message}
                    />
                )}
                {router === 'login' && <CtaToRegister />}
            </div>

            <FormSubmitButton formType={router} disabled={isLoading} />

            {router === 'register' && <CtaToLogin />}
        </form>
    )
}
