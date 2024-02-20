import { IInput } from 'interfaces'
import { useState } from 'react'
import { Eye, EyeClosed } from '@phosphor-icons/react'

export default function Input({
    type,
    name,
    label,
    value,
    register,
    error,
    helperText,
    ...rest
}: IInput) {
    const [eyeIsOpen, setEyeIsOpen] = useState(false)
    const toggleEye = () => {
        setEyeIsOpen(!eyeIsOpen)
    }

    const errorMessage = helperText?.[name]?.message

    return (
        <div className="flex flex-col gap-1 mt-4">
            <label htmlFor={name} className="capitalize disabled:text-gray-400">
                {label}
            </label>
            <div>
                <div
                    className={`flex border-2 rounded
                    ${
                        errorMessage &&
                        'border-[1px] rounded-b-none border-red-500'
                    }`}
                >
                    <input
                        {...rest}
                        {...register(name)}
                        className="
                        outline-none bg-transparent w-full placeholder:text-sm
                        pl-2 disabled:text-gray-400 disabled:cursor-not-allowed"
                        name={name}
                        type={eyeIsOpen ? 'text' : type}
                        value={value}
                    />
                    {type === 'password' && (
                        <button
                            type="button"
                            className="flex justify-center items-center pr-2 "
                            onClick={toggleEye}
                        >
                            {eyeIsOpen ? <Eye /> : <EyeClosed />}
                        </button>
                    )}
                </div>
                {helperText?.[name]?.message && (
                    <div className="bg-red-400 border-x-[1px] border-b-[1px] rounded-b border-red-500">
                        <p className="text-xs text-red-200">
                            {helperText[name].message}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
