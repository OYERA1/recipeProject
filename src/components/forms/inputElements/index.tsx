import { Eye, EyeClosed } from '@phosphor-icons/react'
import { AppPropsType } from 'next/dist/shared/lib/utils'
import { ChangeEvent, useState } from 'react'

interface IForm {
    name: string
    type: string
    title: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function CreateInput({ type, name, title, ...props }: IForm) {
    const [eyeIsOpen, setEyeIsOpen] = useState(false)

    const toggleEye = () => {
        setEyeIsOpen(!eyeIsOpen)
    }

    return (
        <div className="flex flex-col w-full gap-2">
            <label htmlFor={name}>{title}</label>
            <div className="flex border-2 rounded">
                <input
                    type={eyeIsOpen ? 'text' : type}
                    name={name}
                    className="outline-none bg-transparent w-full ml-2 placeholder:text-sm  "
                    placeholder={`digite ${
                        type === 'password'
                            ? 'sua senha'
                            : type === 'email'
                            ? 'seu email '
                            : 'seu nome'
                    } `}
                    {...props}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        className="flex justify-center items-center"
                        onClick={toggleEye}
                    >
                        {eyeIsOpen ? (
                            <Eye className="mr-2" />
                        ) : (
                            <EyeClosed className="mr-2" />
                        )}
                    </button>
                )}
            </div>
        </div>
    )
}
