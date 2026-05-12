import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Testimonial = () => {
  return (
    <section
      dir='rtl'
      id='testimonials'
      className='scroll-mt-24 border-none bg-section dark:bg-darklight'>

      <div className='container mx-auto max-w-6xl px-4'>

        <div>

          {/* تصویر */}
          <Image
            src={getImgPath('/images/testimonial/vector-smart.png')}
            alt='testimonial'
            width={150}
            height={150}
            quality={100}
            className='mx-auto h-52 w-94'
          />

          {/* متن نظر */}
          <div className='pb-28 pt-16'>

            <p className='mx-auto max-w-3xl text-center text-base font-medium leading-8 text-midnight_text dark:text-white md:text-xl'>
              این یک متن نمونه از نظر مشتری است که نشان‌دهنده تجربه مثبت
              استفاده از خدمات و کیفیت بالای پروژه‌ها می‌باشد.
            </p>

          </div>

          {/* نام مشتری */}
          <div className='text-center'>

            <strong className='text-lg font-bold text-midnight_text dark:text-primary'>
              جاناتان دیزل
            </strong>

            <p className='text-base text-gray dark:text-white/60'>
              مشتری راضی، شرکت Apple
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonial