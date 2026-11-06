
import {Suspense} from 'react'
import Image from 'next/image'
import {getExperiences} from '../lib/queries'
import {urlFor} from '../lib/image'

async function ExperienceContent() {
  const experiences = await getExperiences()

  return (
    <section
      className='flex flex-col gap-y-8 min-[800px]:gap-y-10 w-full'
      id='experience_section'
    >
      <h2 className='uppercase min-[800px]:text-2xl text-xl text-center font-black text-blue-300 tracking-wide'>
        Doświadczenie
      </h2>

      {experiences.map((exp: {
        _id: string
        companyFull: string
        companyShort?: string
        position: string
        sectionId?: string
        logo?: any
        alt?: string
        period?: string
        duties?: string[]
      }) => {
          return (
            <section
              key={exp._id}
              className='flex w-full flex-col mb-7'
              id={exp.sectionId}
            >
              <div className='flex flex-col gap-y-5'>
                <div className='flex min-[800px]:justify-between min-[800px]:flex-row flex-col items-center w-full'>
                  <div className='flex min-[800px]:gap-x-4 gap-x-2 min-[800px]:mb-0 mb-2 items-center'>
                    {exp.logo && (
                      <Image
                        src={urlFor(exp.logo)}
                        title={exp.alt || exp.companyFull}
                        alt={exp.alt || exp.companyFull}
                        width={30}
                        height={30} />
                    )}

                    <div className='flex flex-col'>
                      <h2 className='font-semibold'>
                        {exp.position}{' w '}
                        <span className='min-[800px]:inline hidden'>
                          {exp.companyFull}
                        </span>

                        <span className='min-[800px]:hidden inline'>
                          {exp.companyShort || exp.companyFull}
                        </span>

                      </h2>
                    </div>
                  </div>

                  <span className='text-xs text-(--second-text)'>
                    {exp.period}
                  </span>
                </div>

                <ul className='list-disc list-inside text-[12.5px] text-(--second-text-lighter) min-[800px]:leading-6 flex flex-col min-[800px]:gap-y-2 gap-y-3'>
                  {exp.duties?.map((duty, dutyIdx) => (
                    <li key={dutyIdx}>{duty}</li>
                  ))}
                </ul>
              </div>
            </section>
          )
        })}
    </section>
  )
}

export default function Experience() {
  return (
    <Suspense fallback={<p>Ładowanie doświadczenia...</p>}>
      <ExperienceContent />
    </Suspense>
  )
}
