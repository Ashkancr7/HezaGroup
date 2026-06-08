'use client'

import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      dir='rtl'
      className='relative overflow-hidden pt-28 text-white dark:bg-darklight md:pt-44'>

      <div className='container  relative z-10 mx-auto grid max-w-6xl grid-cols-12 gap-8 px-4'>

        {/* متن */}
        <div
          className='col-span-12 flex flex-col items-start justify-center space-y-6 px-0 md:col-span-6 md:px-4'
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'>

          {/* وضعیت */}
          <div className='flex items-center gap-2'>
            <span className='h-3 w-3 rounded-full bg-success'></span>

            <span className='text-sm font-medium text-midnight_text dark:text-white/50'>
              طراحی و توسعه حرفه‌ای وب و اپلیکیشن
            </span>
          </div>

          {/* عنوان */}
          <h1 className='text-2xl font-bold leading-tight text-midnight_text dark:text-white md:text-3xl md:leading-[1.2]'>
            ساخت تجربه‌های دیجیتال مدرن و حرفه‌ای برای برند شما
          </h1>

          {/* توضیح */}
          <p className='text-lg font-medium leading-8 text-grey dark:text-white/70 md:text-xl'>
            طراحی سایت، توسعه اپلیکیشن و پیاده‌سازی رابط کاربری مدرن با
            استفاده از جدیدترین تکنولوژی‌های روز دنیا.
          </p>

          {/* دکمه */}
          <a
            href='#learn-more'
            className='rounded-xl bg-blue-600 px-8 py-3 text-white transition duration-300 hover:bg-blue-700'>
            شروع همکاری
          </a>

          {/* کاربران */}
          <div className='mt-10 flex flex-wrap items-center gap-4'>

            <div className='flex items-center'>

              <Image
                src={getImgPath('/images/hero/hero-profile-1.png')}
                alt='user'
                width={40}
                height={40}
                quality={100}
                className='h-10 w-10 rounded-full border-2 border-white'
              />

              <Image
                src={getImgPath('/images/hero/hero-profile-2.jpg')}
                alt='user'
                width={40}
                height={40}
                quality={100}
                className='-mr-3 h-10 w-10 rounded-full border-2 border-white'
              />

              <Image
                src={getImgPath('/images/hero/hero-profile-3.jpg')}
                alt='user'
                width={40}
                height={40}
                quality={100}
                className='-mr-3 h-10 w-10 rounded-full border-2 border-white'
              />
            </div>

            <div>
              <p className='max-w-xs text-sm leading-7 text-grey dark:text-white/70'>
                نیاز به مشاوره دارید؟
                <Link
                  href='/contact'
                  className='mr-1 text-primary transition hover:text-blue-700'>
                  با متخصصین ما تماس بگیرید
                </Link>
                و درباره پروژه خود بیشتر صحبت کنید.
              </p>
            </div>
          </div>
        </div>

        {/* تصویر */}
        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end">
          <div className="w-full max-w-[500px]">
            <Image
              src={getImgPath('/images/hero/hero-image.webp')}
              alt="hero-image"
              width={500}
              height={500}
              quality={100}
              priority
              className="block w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero