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
      <Link
        href={'/'}
        className="w-1/2 font-bold md:text-2xl lg:text-3xl xl:text-4xl"
      >
        Juul Van de Velde
      </Link>
      <nav className="hidden w-1/2 flex-row justify-between sm:flex">
        <ul className="md:text-md flex flex-row font-medium sm:gap-5 md:gap-8 lg:text-lg xl:text-xl">
          <li className="hover:underline">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:underline">
            <a href="#works">Works</a>
          </li>
          <li className="hover:underline">
            <a href="#reviews">Reviews</a>
          </li>
          <li className="hover:underline">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button onClick={switchTheme} aria-label="Toggle Dark/Light Mode">
          {isDarkTheme ? (
            <>
              <Moon
                size={24}
                weight="fill"
                className="inline-block lg:hidden"
              />
              <Moon
                size={32}
                weight="fill"
                className="hidden lg:inline-block"
              />
            </>
          ) : (
            <>
              <Sun size={24} weight="fill" className="inline-block lg:hidden" />
              <Sun size={32} weight="fill" className="hidden lg:inline-block" />
            </>
          )}
        </button>
      </nav>
    </header>
  )
}

export default Header
