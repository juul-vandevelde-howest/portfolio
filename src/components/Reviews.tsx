'use client'

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import Section from './Section'

function Reviews() {
  return (
    <Section title="WHAT<br />OTHERS SAY" id="reviews">
      <div className="my-20 flex flex-row gap-12 justify-center">
        <div className="w-1/2 border-2 border-foreground p-16">
          <div className="pb-12 text-xl">
          Juul Van de Velde is a web development master, seamlessly blending functionality and design. With expertise in both front-end and back-end technologies, he crafts user-friendly experiences with precision. Juul&apos;s work showcases versatility, innovation, and a commitment to exceeding client expectations.
          </div>
          <div className="text-3xl italic">ChatGPT</div>
        </div>
        <div className="flex w-1/3 flex-col justify-between">
          <div className="border-2 border-foreground p-8">
            <div className="pb-12">
              Lorem ipsum dolor sit amet consectetur. Massa penatibus
              pellentesque tincidunt est
            </div>
            <div className="text-xl italic">Mom</div>
          </div>
          <div className="flex flex-row gap-8">
            <button>
              <ArrowLeft size={64} />
            </button>
            <button>
              <ArrowRight size={64} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Reviews
