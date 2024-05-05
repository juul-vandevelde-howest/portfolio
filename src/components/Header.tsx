'use client'

import { Moon, Sun } from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      return theme === 'dark'
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return true
    }
    return false
  })

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      document.documentElement.classList.add(theme)
      setIsDarkTheme(theme === 'dark')
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark')
      setIsDarkTheme(true)
    }
  }, [])

  function switchTheme() {
    const element = document.documentElement
    if (element.classList.contains('dark')) {
      element.classList.remove('dark')
      element.classList.add('light')
      localStorage.setItem('theme', 'light')
      setIsDarkTheme(false)
    } else {
      element.classList.remove('light')
      element.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkTheme(true)
    }
  }

  return (
    <header className="flex flex-row items-center pt-4 xs:pt-7 sm:pt-10">
      <Link
        href={'/'}
        className="w-3/4 font-bold sm:w-1/2 md:text-2xl lg:text-3xl xl:text-4xl"
      >
        Juul Van de Velde
      </Link>
      <nav className="flex w-1/4 flex-row justify-end sm:w-1/2 sm:justify-between">
        <ul className="md:text-md hidden flex-row font-medium sm:flex sm:gap-5 md:gap-8 lg:text-lg xl:text-xl">
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
