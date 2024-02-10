'use client'

import HeaderRecipes from '@/components/header/page'
import Trends from '@/components/trends/page'
import CreateForm from '@/components/forms'
import { useModal } from '@/context/useModal'

export default function Home() {
    const { isOpenModal, toggleModal } = useModal()

    return (
        <main className="h-[100000px] flex flex-col items-center relative">
            <HeaderRecipes />
            <section className="mt-24">
                <Trends />
            </section>
            {isOpenModal && (
                <div
                    className="fixed flex items-center justify-center backdrop-blur-md bg-black/30 h-screen w-screen hover:cursor-pointer overscroll-none z-20"
                    onMouseDown={e =>
                        e.target === e.currentTarget && toggleModal()
                    }
                >
                    <CreateForm />
                </div>
            )}
        </main>
    )
}
