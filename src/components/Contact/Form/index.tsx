import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const ContactForm = () => {
  return (
    <section dir="rtl" className='dark:bg-darkmode md:pb-24 pb-16 text-right'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 gap-8 items-center'>

          {/* فرم */}
          <div className='col-span-6'>

            <h2 className='max-w-72 text-[40px] leading-tight font-bold mb-9 text-midnight_text dark:text-white'>
              دریافت مشاوره آنلاین
            </h2>

            <form className='flex flex-wrap w-full justify-between'>

              {/* نام و نام خانوادگی */}
              <div className='sm:flex gap-3 w-full'>

                <div className='mx-0 my-2.5 flex-1'>
                  <label className='pb-3 inline-block text-base'>
                    نام*
                  </label>
                  <input
                    className='w-full text-base px-4 rounded-lg py-2.5 border border-border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all focus:border-primary focus:outline-0'
                    type='text'
                  />
                </div>

                <div className='mx-0 my-2.5 flex-1'>
                  <label className='pb-3 inline-block text-base'>
                    نام خانوادگی*
                  </label>
                  <input
                    className='w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all focus:border-primary focus:outline-0'
                    type='text'
                  />
                </div>

              </div>

              {/* ایمیل و تخصص */}
              <div className='sm:flex gap-3 w-full'>

                <div className='mx-0 my-2.5 flex-1'>
                  <label className='pb-3 inline-block text-base'>
                    ایمیل*
                  </label>
                  <input
                    type='email'
                    className='w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all focus:border-primary focus:outline-0'
                  />
                </div>

                <div className='mx-0 my-2.5 flex-1'>
                  <label className='pb-3 inline-block text-base'>
                    تخصص*
                  </label>
                  <select className='w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all focus:border-primary focus:outline-0'>
                    <option value=''>انتخاب تخصص</option>
                    <option value='design'>طراحی UX/UI</option>
                    <option value='frontend'>فرانت‌اند</option>
                    <option value='backend'>بک‌اند</option>
                    <option value='marketing'>بازاریابی دیجیتال</option>
                  </select>
                </div>

              </div>

              {/* تاریخ و زمان */}
              <div className='sm:flex gap-3 w-full'>

                <div className='mx-0 my-2.5 flex-1'>
                  <label className='pb-3 inline-block text-base'>
                    تاریخ*
                  </label>
                  <input
                    className='w-full text-base px-4 rounded-lg py-2.5 border border-border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all focus:border-primary focus:outline-0'
                    type='date'
                  />
                </div>

                <div className='mx-0 my-2.5 flex-1'>
                  <label className='pb-3 inline-block text-base'>
                    زمان*
                  </label>
                  <input
                    className='w-full text-base px-4 rounded-lg py-2.5 border border-border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all focus:border-primary focus:outline-0'
                    type='time'
                  />
                </div>

              </div>

              {/* دکمه */}
              <div className='mx-0 my-2.5 w-full'>
                <Link
                  href='#'
                  className='bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700'>
                  رزرو وقت مشاوره
                </Link>
              </div>

            </form>
          </div>

          {/* تصویر */}
          <div className='col-span-6'>
            <Image
              src={getImgPath('/images/contact-page/contact.jpg')}
              alt='تماس با ما'
              width={1300}
              height={0}
              quality={100}
              style={{ width: '100%', height: 'auto' }}
              className='rounded-lg'
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactForm