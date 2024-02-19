import {
    CookingPot,
    MagnifyingGlass,
    User
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default async function HeaderRecipes() {
    
    return (
        <nav className="flex gap-24 w-max mt-4 p-4 backdrop-blur-lg bg-gray-600/35 shadow-lg rounded-2xl fixed">
            <Link href={'/'}>
                <CookingPot size={32} color="black" />
            </Link>

            <div className="flex items-center rounded-md border-[1px] overflow-hidden border-black bg-blue-950/50 ">
                <input
                    type="text"
                    placeholder="lorem"
                    className="ml-2 text-sm bg-transparent placeholder:text-sm outline-none placeholder:text-white/85"
                />
                <button
                    type="button"
                    className="flex bg-orange-500 rounded-l-none h-full w-[2rem] items-center justify-center hover:bg-orange-600 ease-in duration-75"
                >
                    <MagnifyingGlass size={18} color="white" />
                </button>
            </div>

            <button
                type="button"
                className="flex items-center justify-center hover:underline decoration-orange-700 underline-offset-2"
            >
                <User size={18} />
                <p className="">login</p>
            </button>
        </nav>
    )
}
