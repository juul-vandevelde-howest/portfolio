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
    <section id={id} className="mb-20 pt-20">
      <h1
        className="text-8xl font-bold italic"
        dangerouslySetInnerHTML={{
          __html: title.replace(/<br\s*\/?>/gi, '<br />'),
        }}
      ></h1>
      {children}
    </section>
  )
}

export default Section
