import { UserCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full h-[8rem] items-center justify-between p-4 gap-8 border-b-2 border-b-gray-100/80">
      <Link className="flex" href="/">
        <h1 className="text-md font-bold">A11TO</h1>
      </Link>
      <div className="flex justify-center gap-12 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/about">About</Link>
      </div>
      <Link
        className="flex w-[7rem] justify-center items-center gap-4"
        href="/login"
      >
        <p className="text-sm font-medium">Login</p>
        <UserCircleIcon className="w-6 h-6" />
      </Link>
    </header>
  );
}
