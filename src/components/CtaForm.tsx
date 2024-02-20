import Link from 'next/link'

export function CtaToRegister() {
    return (
        <Link className="flex text-sm underline  my-2" href="/register">
            <p>Registrar-se!</p>
        </Link>
    )
}

export function CtaToLogin() {
    return (
        <Link className="flex text-sm hover:underline my-2" href="/login">
            <p>
                Já tem uma conta?{' '}
                <strong className="text-orange-700">Entrar!</strong>
            </p>
        </Link>
    )
}

export default { CtaToLogin, CtaToRegister }
