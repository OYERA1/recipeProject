'use client'

import Input from '../input'
import inputs from '@/fakecms/inputs'
import { FormSubmitButton } from '../buttons/page'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Check } from '@phosphor-icons/react'
import bcrypt from 'bcryptjs-react'

interface IPayload {
    name: string
    email: string
    pwd: string
    confirmPwd: string
}

export default function Form({ toggleModal }: { toggleModal: () => void }) {
    const [payload, setPayload] = useState<IPayload>({
        name: '',
        email: '',
        pwd: '',
        confirmPwd: ''
    })
    const [match, setMatch] = useState<boolean | null>(null)
    const [err, setErr] = useState<boolean>(false)
    const cms = inputs

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name
        const value = e.target.value
        setPayload(prevState => ({ ...prevState, [inputName]: value }))
    }

    useEffect(() => {
        const { pwd, confirmPwd } = payload
        switch (true) {
            case pwd === confirmPwd && confirmPwd !== '':
                setMatch(true)
                setErr(false)
                break
            case pwd !== confirmPwd && confirmPwd !== '':
                setMatch(false)
                break
            default:
                setMatch(null)
        }
    }, [payload])

    const handleSubmit = async (e: FormEvent) => {
        if (payload.pwd !== payload.confirmPwd) {
            e.preventDefault()
            setErr(true)
            return
        }
        if (payload) {
            const { name, email, pwd } = payload
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(pwd, salt)
            try {
                e.preventDefault()
                const newUser = await fetch('http://localhost:3000/api/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: hash
                    })
                })
                if (newUser.status === 201) {
                    const data = newUser.status
                    alert('Conta criada!')
                    toggleModal()
                    return console.log(data)
                }
            } catch (e) {
                alert('deu ruim')
                console.log(e)
            }
        }
    }

    const PasswordCheckRender = () => {
        if (match == null) {
            return <></>
        }
        if (match === false) {
            return <p className="text-red-500">As senhas não coincidem.</p>
        }
        return <Check color="green" />
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
                <h1 className="text-center mt-4 font-bold text-2xl">
                    Registre-se!
                </h1>
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center">
                <div className="flex flex-col w-max justify-center gap-6">
                    {cms.map(({ type, id, name, title, placeholder }) => (
                        <Input
                            type={type}
                            key={id}
                            name={name}
                            title={title}
                            placeholder={placeholder}
                            onChange={handleOnChange}
                        />
                    ))}
                    <div className="w-full flex justify-end">
                        <PasswordCheckRender />
                    </div>
                </div>
                {err && (
                    <div className="p-2 bg-red-300 border-2 border-red-500 w-80 mt-10">
                        <p>
                            Não é possivel criar conta, as senhas não coincidem
                        </p>
                    </div>
                )}
                <div className="mt-10">
                    <FormSubmitButton />
                </div>
            </div>
        </form>
    )
}
