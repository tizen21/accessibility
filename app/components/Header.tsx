import { UserCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full h-[8rem] items-center justify-between p-4 gap-8 border-b-2 border-b-gray-100/80">
      <div className="flex">
        <h1 className="text-md font-bold">Accessibility Helper</h1>
      </div>
      <div className="flex justify-center gap-12 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="flex w-[7rem] justify-center items-center gap-4">
        <Link href="/login" className="text-sm font-medium">
          Login
        </Link>
        <UserCircleIcon className="w-6 h-6" />
      </div>
    </header>
  );
}
