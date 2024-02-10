'use client'

import Image from 'next/image'
import Link from 'next/link'

interface PropTypes {
    props: {
        title: string
        alt: string
        src: string
    }
}

export default function Card({ props }: PropTypes) {
    const { title, alt, src } = props
    return (
        <Link
            href={`/${title}`}
            className="border-[1px] border-black rounded-xl overflow-hidden relative"
        >
            <div className="relative w-[200px] h-[300px]">
                <Image src={src} alt={alt} layout="fill" objectFit="cover" />
                <div
                    className="absolute bottom-0 inset-0 inset-y-36
                bg-gradient-to-t from-violet-900 to-transparent
                "
                />
            </div>
            <h1 className="absolute bottom-0 left-0 text-white px-4 py-2">
                {title}
            </h1>
        </Link>
    )
}
