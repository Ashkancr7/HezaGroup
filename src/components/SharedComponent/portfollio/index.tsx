import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
  return (
    <section
      dir='rtl'
      id='portfolio'
      className='bg-white py-20 dark:bg-darkmode'>

      <div className='px-8 text-center lg:px-0'>

        {/* عنوان کوچک */}
        <div
          className='flex items-center justify-center gap-2'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>

          <span className='h-3 w-3 rounded-full bg-success'></span>

          <span className='text-sm font-medium text-midnight_text dark:text-white/50'>
            نمونه‌کارها
          </span>
        </div>

        {/* تیتر */}
        <h2
          className='mx-auto w-full pt-7 pb-4 text-center text-[28px] font-bold leading-tight text-midnight_text dark:text-white sm:text-4xl md:w-4/6'
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'>

          بررسی مجموعه‌ای از بهترین پروژه‌های من
        </h2>

        {/* توضیح */}
        <div className='inline-flex pb-14'>
          <p className='max-w-sm text-base font-normal leading-7 text-grey dark:text-white/60'>
            مجموعه‌ای منتخب از بهترین پروژه‌ها که نشان‌دهنده تجربه و مهارت
            من در حوزه‌های مختلف طراحی و توسعه است.
          </p>
        </div>
      </div>

      {/* کارت‌ها */}
      <PortfolioCard />
    </section>
  )
}

export default Portfolio