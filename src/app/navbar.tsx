import { Hammer } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center py-4 px-4 lg:px-0">
          <Link href="/" className="flex flex-row gap-2 items-center">
            <Hammer />
            <span className="font-bold">
              Toolbox
            </span>
          </Link>
          <div className="text-sm flex gap-8">
            <Link
              href="/"
            >
              Home
            </Link>
            <Link
              href="about"
            >
              What is Toolbox?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;