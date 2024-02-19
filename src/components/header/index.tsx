import { CookingPot, MagnifyingGlass, Person, User } from '@phosphor-icons/react/dist/ssr'

export default function HeaderRecipes() {
    return (
        <div className="w-full flex justify-center">
            <nav className="flex mt-4 p-4 backdrop-blur-lg bg-gray-900/35 shadow-lg justify-evenly rounded-2xl gap-40 fixed z-10">
                <div>
                    <CookingPot />
                </div>

                <div className="flex items-center rounded-md border-[1px] overflow-hidden border-black bg-blue-950/50 ">
                    <input
                        type="text"
                        placeholder="lorem"
                        className="ml-2 text-sm bg-transparent  placeholder:text-sm outline-none placeholder:text-white/85"
                    />
                    <button
                        type="button"
                        className="flex bg-orange-500 rounded-l-none h-full w-[2rem] items-center justify-center hover:bg-orange-600 ease-in duration-75"
                    >
                        <MagnifyingGlass size={16} />
                    </button>
                </div>

                <div className="flex">
                    <button
                        type="button"
                        className="flex gap-2 items-center hover:underline decoration-orange-700 underline-offset-2"
                    >
                        <p>login</p>
                    </button>
                </div>
            </nav>
        </div>
    )
}
