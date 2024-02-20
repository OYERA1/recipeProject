import Link from 'next/link'

export default function Footer() {
    return (
        <span className="flex w-full justify-center fixed bottom-2">
            Made with ❤️ by &nbsp;
            <Link href="https://github.com/oyera1" target="_blank" className='text-orange-500'>
                ØYERA
            </Link>
        </span>
    )
}
