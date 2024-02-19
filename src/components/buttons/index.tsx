import { IButton } from 'types/interfaces'

export function FormSubmitButton({ formType, disabled, ...props }: IButton) {
    return (
        <div className="flex justify-center mt-10 mb-5">
            <button
                type="submit"
                className="p-2 w-32 rounded-md bg-orange-700 border-2 border-orange-800 hover:bg-orange-900 ease-in duration-100 text-white
                disabled:bg-orange-950 disabled:cursor-not-allowed disabled:border-orange-950
                "
                disabled={disabled}
                {...props}
            >
                {disabled
                    ? 'loading...'
                    : formType === 'register'
                    ? 'Registrar-se!'
                    : 'Login'}
            </button>
        </div>
    )
}
