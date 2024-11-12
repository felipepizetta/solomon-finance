import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-row min-w-full min-h-screen justify-center items-center">
            <Link href={'/pages/login'} className="text-zinc-400 text-sm">Return Login</Link>
        </main>
    )
  }