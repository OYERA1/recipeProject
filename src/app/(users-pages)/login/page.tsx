import Form from '@/components/Form'
import Input from '@/components/Input'
import Link from 'next/link'

export default async function Login() {
    return (
        <main className="flex h-screen">
            <div className="flex w-full h-full bg-orange-600 justify-center items-start py-10 ">
                <Link href={'/'} className="bold text-7xl">
                    Login Page!
                </Link>
            </div>
            <Form className="w-8/12" />
        </main>
    )
}
