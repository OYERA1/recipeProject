import Form from '@/components/Form'
import Link from 'next/link'

export default function Register() {
    return (
        <main className="flex h-screen">
            <div className="flex w-full h-full bg-orange-600 justify-center items-start py-10 ">
                <Link href={'/'} className="bold text-7xl">
                    Register Page!
                </Link>
            </div>

            <Form className="w-8/12" />
        </main>
    )
}
