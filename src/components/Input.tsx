import { IInput } from 'interfaces'
import { useState } from 'react'
import { Eye, EyeClosed } from '@phosphor-icons/react'
import { cms } from '@/lib/functions'

export default function Input({
    errors,
    disabled,
    register,
    name,
    ...rest
}: IInput) {
    const [eyeIsOpen, setEyeIsOpen] = useState(false)
    const toggleEye = () => {
        setEyeIsOpen(!eyeIsOpen)
    }
    const { label, placeholder, type } = cms(name)
    if (!name) return

    return (
        <div className="flex flex-col gap-1 mt-4">
            <label
                htmlFor={name}
                className={`font-bold text-l ${disabled && 'text-gray-400'}`}
            >
                {label}
            </label>
            <div>
                <div className="flex border-2 rounded">
                    <input
                        id={name}
                        {...rest}
                        {...register(name)}
                        placeholder={placeholder}
                        disabled={disabled}
                        type={eyeIsOpen ? 'text' : type}
                        className="
                        outline-none bg-transparent w-full placeholder:text-sm
                        pl-2 disabled:text-gray-400 disabled:cursor-not-allowed"
                    />
                    {type === 'password' && (
                        <button
                            type="button"
                            className="flex justify-center items-center pr-2 "
                            onClick={toggleEye}
                        >
                            {eyeIsOpen && <Eye />}
                            {!eyeIsOpen && <EyeClosed />}
                        </button>
                    )}
                </div>
                {errors && <p className="text-xs text-red-600">{errors}</p>}
            </div>
        </div>
    )
}
