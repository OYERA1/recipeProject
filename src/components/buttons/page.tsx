import { IForm } from 'types/interfaces'

export function FormSubmitButton({ type }: { type: IForm['type'] }) {
    return (
        <div className="flex justify-center mt-10 mb-5">
            <button
                type="submit"
                className="p-2 w-32 rounded-md bg-orange-700 border-2 border-orange-800 hover:bg-orange-900 ease-in duration-100 text-white

                "
            >
                {type === 'register' ? 'Registrar-se!' : 'Login'}
            </button>
        </div>
    )
}
