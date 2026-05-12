import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Contactform = () => {
  return (
    <section
      dir='rtl'
      className='overflow-x-hidden bg-darkmode dark:bg-darklight'>

      <div className='container mx-auto max-w-6xl px-4'>

        <div className='grid grid-cols-1 md:grid-cols-12 md:gap-7'>

          {/* اطلاعات تماس */}
          <div
            className='col-start-1 col-end-12 row-start-1 row-end-2 md:col-end-7'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>

            {/* عنوان کوچک */}
            <div className='flex items-center justify-start gap-2'>
              <span className='h-3 w-3 rounded-full bg-success'></span>

              <span className='text-sm font-medium text-white'>
                طراحی و توسعه پروژه‌ها
              </span>
            </div>

            {/* تیتر */}
            <h2 className='py-12 text-[28px] font-bold leading-tight text-white sm:text-4xl'>
              بیایید درباره پروژه شما صحبت کنیم و آن را به سطح بالاتری ببریم
            </h2>

            {/* اطلاعات */}
            <div className='grid grid-cols-6 border-b border-dark_border pb-12'>

              <div className='col-span-3'>
                <span className='text-lg text-white/50'>تلفن</span>
                <p className='text-lg text-white'>
                  09910616048
                </p>
              </div>

              <div className='col-span-3'>
                <span className='text-lg text-white/50'>ایمیل</span>
                <p className='text-lg text-white'>
                  info@hezhaco.ir
                </p>
              </div>

              <div className='col-span-6 pt-8'>
                <span className='text-lg text-white/50'>آدرس</span>
                <p className='text-lg text-white'>
                 سنندج-دانشگاه کردستان -دانشکده مهندسی-مرکز رشد واحدهای فناور-واحد2
                </p>
              </div>

            </div>

            {/* برندهای همکار */}
            <div className='pt-12'>

              <p className='pb-4 text-base text-white/50'>
                مورد اعتماد برندهای
              </p>

              <div className='flex flex-wrap items-center gap-7 md:gap-14'>

                <Image
                  src={getImgPath('/images/contact/google-pay.png')}
                  alt='Google Pay'
                  width={100}
                  height={20}
                  className='h-5 w-auto max-w-28'
                />

                <Image
                  src={getImgPath('/images/contact/play-juction.png')}
                  alt='Play Junction'
                  width={100}
                  height={20}
                  className='h-6 w-auto max-w-24'
                />

                <Image
                  src={getImgPath('/images/contact/stripe.png')}
                  alt='Stripe'
                  width={100}
                  height={20}
                  className='h-6 w-auto max-w-14'
                />

                <Image
                  src={getImgPath('/images/contact/wise.png')}
                  alt='Wise'
                  width={100}
                  height={20}
                  className='h-4 w-auto max-w-16'
                />

              </div>
            </div>
          </div>

          {/* فرم */}
          <div
            className="relative col-start-1 col-end-13 row-start-2 row-end-2 md:col-start-8 md:row-start-1 before:absolute before:hidden before:bg-[url('/images/contact/form-line.png')] before:bg-contain before:bg-no-repeat lg:before:inline-block after:absolute after:hidden after:bg-[url('/images/contact/from-round-line.png')] after:bg-contain after:bg-no-repeat md:after:inline-block"
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>

            <div className='relative z-10 m-auto mt-8 max-w-[50rem] rounded-md bg-white px-10 py-9 dark:bg-darkmode lg:mt-0'>

              <h2 className='mb-3 text-lg font-bold text-midnight_text dark:text-white sm:text-3xl'>
                شروع پروژه
              </h2>

              <form className='flex w-full flex-wrap justify-between gap-4'>

                {/* نام و نام خانوادگی */}
                <div className='flex w-full gap-4'>

                  <input
                    type='text'
                    placeholder='نام'
                    className='w-full rounded-lg border border-border bg-transparent px-4 py-3 text-base text-midnight_text placeholder:text-grey focus:border-primary focus:outline-none dark:border-dark_border dark:text-white'
                  />

                  <input
                    type='text'
                    placeholder='نام خانوادگی'
                    className='w-full rounded-lg border border-border bg-transparent px-4 py-3 text-base text-midnight_text placeholder:text-grey focus:border-primary focus:outline-none dark:border-dark_border dark:text-white'
                  />

                </div>

                {/* ایمیل */}
                <div className='w-full'>
                  <input
                    type='email'
                    placeholder='youremail@website.com'
                    className='w-full rounded-lg border border-border bg-transparent px-4 py-3 text-base text-midnight_text placeholder:text-grey focus:border-primary focus:outline-none dark:border-dark_border dark:text-white'
                  />
                </div>

                {/* کشور */}
                <div className='w-full'>
                  <input
                    type='text'
                    placeholder='کشور'
                    className='w-full rounded-lg border border-border bg-transparent px-4 py-3 text-base text-midnight_text placeholder:text-grey focus:border-primary focus:outline-none dark:border-dark_border dark:text-white'
                  />
                </div>

                {/* پیام */}
                <div className='w-full'>
                  <textarea
                    placeholder='درباره پروژه خود توضیح دهید'
                    className='h-40 w-full rounded-lg border border-border bg-transparent px-4 py-3 text-base text-midnight_text placeholder:text-grey focus:border-primary focus:outline-none dark:border-dark_border dark:text-white'
                  />
                </div>

                {/* قوانین */}
                <div className='flex items-start gap-2'>

                  <input type='checkbox' className='mt-1' />

                  <p className='text-sm text-grey dark:text-white/60'>
                    قوانین و شرایط را مطالعه کرده و قبول دارم
                  </p>

                </div>

                {/* دکمه */}
                <div className='w-full'>
                  <button
                    type='submit'
                    className='w-full rounded-lg bg-primary py-3 text-white transition hover:bg-blue-700'>
                    ارسال درخواست
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contactform