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
      className={`my-20 flex justify-center ${mirror ? 'flex-row-reverse' : 'flex-row'} items-end gap-8`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-1/2 rounded-lg"
      />
      <div className={`${mirror ? 'text-right' : ''}`}>
        <div
          className="pb-2 text-6xl font-bold"
          dangerouslySetInnerHTML={{
            __html: title.replace(/<br\s*\/?>/gi, '<br />'),
          }}
        ></div>
        <div className="pb-4 text-2xl font-light italic">{description}</div>
        <Link
          href={link}
          rel="noopener noreferrer"
          className="text-2xl font-bold"
          target="_blank"
        >
          visit repository -&gt;
        </Link>
      </div>
    </div>
  )
}

export default Work
