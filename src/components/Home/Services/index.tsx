import React from 'react'
import Link from 'next/link'
import { Servicebox } from '@/app/api/data'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const Services = () => {
  return (
    <section
      dir='rtl'
      id='services'
      className='bg-section py-20 dark:bg-darklight'>

      <div className='container mx-auto max-w-6xl px-4'>

        {/* عنوان کوچک */}
        <div
          className='flex items-center justify-center gap-2'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>

          <span className='h-3 w-3 rounded-full bg-success'></span>

          <span className='text-sm font-medium text-midnight_text dark:text-white/50'>
            خدمات ما
          </span>
        </div>

        {/* تیتر اصلی */}
        <h2
          className='mx-auto w-full pt-7 pb-20 text-center text-[28px] font-bold leading-tight text-midnight_text dark:text-white sm:text-4xl md:w-4/6 md:text-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>

          خدماتی که دقیقاً برای نیازهای کسب‌وکار شما طراحی شده‌اند
        </h2>

        {/* کارت‌ها */}
        <div className='grid grid-cols-1 gap-7 sm:grid-cols-8 md:grid-cols-12'>

          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'
              data-aos-offset='300'
              className='col-span-4 flex flex-col items-center justify-between gap-8 rounded-xl bg-white px-7 py-14 text-center shadow-service dark:bg-darkmode'>

              {/* آیکون */}
              <Image
                src={item.icon}
                alt='service icon'
                width={40}
                height={40}
                className='h-10 w-10'
              />

              {/* عنوان */}
              <h3 className='mx-auto max-w-44 text-xl font-bold text-midnight_text dark:text-white'>
                {item.title}
              </h3>

              {/* توضیح */}
              <p className='text-base font-normal text-grey dark:text-white/60'>
                {item.description}
              </p>

              {/* دکمه */}
              <Link
                href='/contact'
                className='group flex items-center text-lg font-medium text-primary transition hover:text-blue-700'>

                شروع کنید

                <span className='mr-1'>
                  <Icon
                    icon='ei:chevron-left'
                    width='28'
                    height='28'
                  />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services