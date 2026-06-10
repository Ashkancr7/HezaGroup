'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'

const PortfolioCard = () => {
  return (
    <div dir='rtl' className='text-right dark:bg-darkmode'>
      
      {/* لیست نمونه کارها */}
      <section id='portfolio' className='md:pb-24 pb-16 pt-8'>
        
        {/* کانتینر فلکس برای چیدمان کارت‌ها کنار هم */}
        <div className='flex flex-wrap gap-[2.125rem] lg:px-[2.125rem] px-4 max-w-[120rem] w-full justify-center m-auto'>
          
          {portfolioinfo.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className='block'
            >
              <div className='w-[18rem] group'>
                
                {/* تصویر */}
                <div className='overflow-hidden rounded-2xl shadow-lg h-[340px]'>
                  <Image
                    src={item.image}
                    alt={item.alt || item.title}
                    width={300}
                    height={300}
                    className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105'
                  />
                </div>

                {/* عنوان پروژه */}
                <h4 className='pb-[0.3125rem] pt-[2.1875rem] text-2xl font-bold text-midnight_text transition-all duration-300 group-hover:text-primary dark:text-white'>
                  {item.title}
                </h4>

                {/* دسته بندی یا توضیح کوتاه (اختیاری - می‌تونی یه چیزی اضافه کنی) */}
                {/* <p className='text-primary font-semibold text-lg'>
                  دسته‌بندی پروژه
                </p> */}

                {/* توضیحات پروژه */}
                <p className='pt-2 text-secondary text-base leading-7 transition-all duration-300 group-hover:text-primary dark:text-white/50'>
                  {item.info}
                </p>

              </div>
            </Link>
          ))}
          
        </div>
      </section>
    </div>
  )
}

export default PortfolioCard
