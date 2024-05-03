function Section({
  title,
  id,
  children,
}: {
  title: string
  id: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="sm:mb-12 sm:pt-12 md:mb-14 md:pt-14 lg:mb-16 lg:pt-16 xl:mb-20 xl:pt-20"
    >
      <h1
        className="font-bold uppercase italic sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        dangerouslySetInnerHTML={{
          __html: title.replace(/<br\s*\/?>/gi, '<br />'),
        }}
      ></h1>
      {children}
    </section>
  )
}

export default Section
