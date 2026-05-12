'use client'

import React from 'react'
import { count } from '@/app/api/data'
import Image from 'next/image'

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      dir='rtl'
      className={`py-20 transition-all duration-300 ${
        isColorMode
          ? 'bg-section dark:bg-darklight'
          : 'bg-white dark:bg-darkmode'
      }`}>
      
      <div className='container mx-auto max-w-6xl px-4'>
        
        <div className='flex flex-wrap items-center justify-center gap-10 md:justify-between md:gap-0'>

          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center'
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'>

              {/* آیکون */}
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md dark:bg-darklight'>
                <Image
                  src={item.icon}
                  alt='icon'
                  width={30}
                  height={30}
                  unoptimized
                />
              </div>

              {/* عدد */}
              <span className='mb-3 text-4xl font-extrabold text-midnight_text dark:text-white md:text-5xl'>
                {item.value}
              </span>

              {/* توضیح */}
              <p className='max-w-[18rem] text-base leading-7 text-grey dark:text-white/60'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter