'use client'

import HeaderRecipes from '@/components/header/page'
import Trends from '@/components/trends/page'
import Form from '@/components/forms'
import { useState } from 'react'

export default function Home() {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    return (
        <main className="h-[100000px] flex flex-col items-center relative">
            <HeaderRecipes toggleModal={toggleModal} />
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
                    <Form toggleModal={toggleModal} />
                </div>
            )}
        </main>
    )
}
