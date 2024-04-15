import Image from 'next/image'

function Works() {
  return (
    <section id="works" className="mb-20 h-dvh pt-20">
      <h1 className="text-8xl font-bold italic">
        RECENT <br /> PROJECTS
      </h1>
      <div className="mx-14 my-20 flex flex-row items-end gap-8">
        {/* TODO: make this css based and not just an image */}
        <Image
          src="/assets/pebbles-placeholder.png"
          alt="Placeholder for a project called Pebbles"
          width={679}
          height={904}
          className="w-2/3"
        />
        <div>
          <div className="pb-2 text-6xl font-bold">Pebbles</div>
          <div className="pb-4 text-2xl font-light italic">
            design / development / team project
          </div>
          <div className="text-2xl font-bold">visit repository -&gt;</div>
        </div>
      </div>
      <div className="mx-14 my-20 flex flex-row items-end justify-end gap-8">
        {/* TODO: make this css based and not just an image */}
        <div>
          <div className="pb-2 text-right text-6xl font-bold">Pebbles</div>
          <div className="pb-4 text-right text-2xl font-light italic">
            design / development / team project
          </div>
          <div className="text-right text-2xl font-bold">
            visit repository -&gt;
          </div>
        </div>
        <Image
          src="/assets/pebbles-placeholder.png"
          alt="Placeholder for a project called Pebbles"
          width={679}
          height={904}
          className="w-2/3"
        />
      </div>
    </section>
  )
}

export default Works
