import Image from 'next/image'

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
      className={`mx-14 my-20 flex ${mirror ? 'flex-row-reverse' : 'flex-row'} items-end gap-8`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-2/3 rounded-lg"
      />
      <div className={`${mirror ? 'text-right' : ''}`}>
        <div
          className="pb-2 text-6xl font-bold"
          dangerouslySetInnerHTML={{
            __html: title.replace(/<br\s*\/?>/gi, '<br />'),
          }}
        ></div>
        <div className="pb-4 text-2xl font-light italic">{description}</div>
        <div className="text-2xl font-bold">visit repository -&gt;</div>
      </div>
    </div>
  )
}

export default Work
