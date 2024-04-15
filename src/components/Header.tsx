'use client'

import { Sun } from '@phosphor-icons/react'
import Link from 'next/link'

function Header() {
  return (
    <header className="mt-10 flex flex-row items-center">
      <Link href={'/'} className="w-1/2 text-4xl font-bold">
        Juul Van de Velde
      </Link>
      <nav className="flex w-1/2 flex-row justify-between">
        <ul className="flex flex-row gap-8 text-xl font-medium">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
        </ul>
      </nav>
      <button>
        <Sun size={32} weight="fill" />
      </button>
    </header>
  )
}

export default Header
