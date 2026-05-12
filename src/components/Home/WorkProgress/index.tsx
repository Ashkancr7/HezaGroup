'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Progress as ProgressData } from '@/app/api/data'
import { getImgPath } from '@/utils/image'

interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([])

  useEffect(() => {
    setProgressValues(ProgressData)
  }, [])

  return (
    <section
      dir='rtl'
      id='about'
      className={`scroll-mt-24 py-20 transition-all duration-300 ${
        isColorMode
          ? 'bg-section dark:bg-darklight'
          : 'bg-white dark:bg-darkmode'
      }`}>
      
      <div className='container mx-auto max-w-6xl px-4'>
        
        <div className='grid items-center gap-10 md:grid-cols-12'>

          {/* تصویر */}
          <div className='md:col-span-6'>
            <Image
              src={getImgPath('/images/work-progress/progress-work.png')}
              alt='progress-image'
              width={500}
              height={500}
              quality={100}
              style={{ width: '100%', height: 'auto' }}
              className='hidden md:block'
            />
          </div>

          {/* محتوا */}
          <div
            className='md:col-span-6'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>

            {/* عنوان کوچک */}
            <div className='flex items-center gap-2'>
              <span className='h-3 w-3 rounded-full bg-success'></span>

              <span className='text-sm font-medium text-midnight_text dark:text-white/50'>
                مهارت‌ها و تخصص‌های حرفه‌ای
              </span>
            </div>

            {/* تیتر */}
            <h2 className='pb-8 pt-8 text-3xl font-extrabold leading-[1.5] text-midnight_text dark:text-white md:text-4xl'>
              طراحی و توسعه وب‌سایت‌های حرفه‌ای با تجربه کاربری مدرن
            </h2>

            {/* توضیح */}
            <p className='text-base font-medium leading-8 text-gray dark:text-white/70'>
              با استفاده از جدیدترین تکنولوژی‌های طراحی و توسعه، تجربه‌ای
              حرفه‌ای، سریع و کاربرپسند برای کاربران شما ایجاد می‌کنیم تا
              برندتان در فضای دیجیتال بدرخشد.
            </p>

            {/* نوار پیشرفت */}
            <div className='mx-auto block pt-12'>

              {progressValues.map((item, index) => (
                <div
                  key={index}
                  className='mb-8 flex flex-wrap'>

                  {/* عنوان */}
                  <div className='mb-2 flex-1 text-sm font-medium text-grey dark:text-white/60'>
                    {item.title}
                  </div>

                  {/* درصد */}
                  <div className='mb-2 shrink text-sm font-semibold text-primary'>
                    %{item.Progress}
                  </div>

                  {/* بار */}
                  <div className='relative h-2 w-full overflow-hidden rounded-full bg-primary/20'>

                    <div
                      className='absolute right-0 top-0 h-full rounded-full bg-primary transition-all duration-700 ease-in-out'
                      style={{ width: `${item.Progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork