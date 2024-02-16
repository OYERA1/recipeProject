import { IInput } from 'types/interfaces'
import { useState } from 'react'
import { Eye, EyeClosed } from '@phosphor-icons/react'

export default function Input({ type, name, title, ...props }: IInput) {
    const [eyeIsOpen, setEyeIsOpen] = useState(false)

    const toggleEye = () => {
        setEyeIsOpen(!eyeIsOpen)
    }

    return (
        <div className="flex flex-col w-full gap-1 mt-4">
            <label htmlFor={name} className="capitalize">
                {title}
            </label>
            <div className="flex border-2 rounded">
                <input
                    type={eyeIsOpen ? 'text' : type}
                    name={name}
                    className="outline-none bg-transparent w-full ml-2 placeholder:text-sm"
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
