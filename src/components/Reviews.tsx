'use client'

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import Section from './Section'

function Reviews() {
  return (
    <Section title="WHAT<br />OTHERS SAY" id="reviews">
      <div className="mx-14 my-20 flex flex-row gap-12">
        <div className="w-1/2 border-2 border-stone-950 p-16">
          <div className="pb-12">
            Lorem ipsum dolor sit amet consectetur. Massa penatibus pellentesque
            tincidunt est pharetra feugiat. Venenatis a nulla tincidunt velit.
            Imperdiet arcu quisque est sed placerat vitae mauris purus nulla.
            Enim et integer nullam faucibus nibh ut mauris sagittis.
          </div>
          <div className="text-3xl italic">Mom</div>
        </div>
        <div className="flex w-1/2 flex-col justify-between">
          <div>Kleine review</div>
          <div>
            <button>
              <ArrowLeft size={32} />
            </button>
            <button>
              <ArrowRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Reviews
