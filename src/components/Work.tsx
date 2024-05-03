import Image from 'next/image'
import Link from 'next/link'

function Work({
  title,
  src,
  alt,
  width,
  height,
  description,
  link,
  mirror = false,
}: {
  title: string
  src: string
  alt: string
  width: number
  height: number
  description: string
  link: string
  mirror?: boolean
}) {
  return (
    <div
      className={`my-20 flex ${mirror ? 'flex-row-reverse' : 'flex-row'} items-end gap-8`}
    >
      <div className="w-1/2 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full transition duration-500 hover:scale-110"
        />
      </div>
      <div className={`${mirror ? 'text-right' : ''}`}>
        <div
          className="pb-2 font-bold leading-tight lg:text-5xl xl:text-6xl"
          dangerouslySetInnerHTML={{
            __html: title.replace(/<br\s*\/?>/gi, '<br />'),
          }}
        ></div>
        <div className="pb-4 font-light italic lg:text-xl xl:text-2xl">
          {description}
        </div>
        <Link
          href={link}
          rel="noopener noreferrer"
          className="font-bold hover:underline lg:text-xl xl:text-2xl"
          target="_blank"
        >
          visit repository -&gt;
        </Link>
      </div>
    </div>
  )
}

export default Work
