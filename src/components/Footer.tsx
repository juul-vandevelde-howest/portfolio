import Link from 'next/link'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex flex-row justify-between pb-10">
      <p className="text-xl">© {currentYear} - Juul Van de Velde</p>
      <div className="flex flex-row gap-14">
        <Link
          href="https://www.linkedin.com/in/juul-vandevelde/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-xl"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/juul-vandevelde-howest"
          rel="noopener noreferrer"
          target="_blank"
          className="text-xl"
        >
          Github
        </Link>
      </div>
    </footer>
  )
}

export default Footer
