import HeaderRecipes from '@/components/header'
import Trends from '@/components/trends/page'
import { getCurentUser } from '@/lib/session'

interface ISession {
    user: {
        name: string
        email: string
    }
}

export default async function Home() {
    const { user } = (await getCurentUser()) as ISession
    const { name, email } = user

    return (
        <main className="h-[100000px] flex flex-col items-center">
            <HeaderRecipes />
            <section className="mt-24">
                <Trends />

                <p>{`${name} ${email}`}</p>
            </section>
        </main>
    )
}
