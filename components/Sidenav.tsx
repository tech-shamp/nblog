/* eslint-disable @next/next/no-img-element */
import { chartIcon, createIcon, searchIcon } from "@src/meta"
import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="h-screen px-4 pt-8 pb-4 sticky top-0 left-0 bottom-0 bg-dark flex justify-start border-r-2 border-primary">
      <nav className="flex justify-between items-center gap-8 flex-col py-20">
        <Link
          href="/"
          className="w-16 h-16 relative flex items-center justify-center text-dark bg-primary rounded-full text-4xl font-lexend"
        >
          S
        </Link>

        <ul className="flex-1 flex items-center flex-col gap-4 mt-6 font-lexend text-white">
          <Link
            href="/search"
            className="flex flex-col items-center justify-center"
          >
            <img src={searchIcon} alt="search icon" />
            search
          </Link>
          <Link
            href="/trending"
            className="flex flex-col items-center justify-center"
          >
            <img src={chartIcon} alt="Chart Icon" />
            trending
          </Link>
        </ul>
        <ul className="flex items-center flex-col gap-4 font-lexend text-white">
          <Link
            href="/create"
            className="flex flex-col items-center justify-center"
          >
            <img src={createIcon} alt="Chart Icon" />
            create
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
