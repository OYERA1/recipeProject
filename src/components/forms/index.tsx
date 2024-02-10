'use client'

import { useModal } from '@/context/useModal'
import { FormSubmitButton } from '../buttons/page'
import CreateInput from './inputElements'
import { FormEvent, useEffect, useState } from 'react'

export default function CreateForm() {
    const { toggleModal } = useModal()
    const [payload, setPayload] = useState({
        name: '',
        email: '',
        pwd: '',
        confirmPwd: ''
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(payload)
    }

    return (
        <form
            className="flex flex-col relative bg-white rounded-md w-1/2 h-4/6 cursor-auto"
            onSubmit={e => handleSubmit(e)}
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
                    <CreateInput
                        type="text"
                        name="senha"
                        title="Nome"
                        onChange={e =>
                            setPayload({ ...payload, name: e.target.value })
                        }
                    />
                    <CreateInput
                        type="email"
                        name="senha"
                        title="Email"
                        onChange={e =>
                            setPayload({ ...payload, email: e.target.value })
                        }
                    />
                    <CreateInput
                        type="password"
                        name="senha"
                        title="Senha"
                        onChange={e =>
                            setPayload({ ...payload, pwd: e.target.value })
                        }
                    />
                    <CreateInput
                        type="password"
                        name="senha"
                        title="Confirme sua senha"
                        onChange={e =>
                            setPayload({
                                ...payload,
                                confirmPwd: e.target.value
                            })
                        }
                    />
                </div>
                <div className="mt-20">
                    <FormSubmitButton />
                </div>
            </div>
        </form>
    )
}
