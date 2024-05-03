'use client'

import { Moon, Sun } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState } from 'react'

function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function switchTheme() {
    const element = document.documentElement
    element.classList.toggle('dark')
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <header className="flex flex-row items-center pt-10">
      <Link href={'/'} className="w-1/2 font-bold lg:text-3xl xl:text-4xl">
        Juul Van de Velde
      </Link>
      <nav className="flex w-1/2 flex-row justify-between">
        <ul className="flex flex-row gap-8 font-medium lg:text-lg xl:text-xl">
          <li className="hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:underline">
            <a href="#works">Works</a>
          </li>
          <li className="hover:underline">
            <a href="#reviews">Reviews</a>
          </li>
        </ul>
        <button onClick={switchTheme}>
          {isDarkTheme ? (
            <Moon size={32} weight="fill" />
          ) : (
            <Sun size={32} weight="fill" />
          )}
        </button>
      </nav>
    </header>
  )
}

export default Header
