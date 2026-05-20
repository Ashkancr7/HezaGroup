import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
 
  Send,
  ArrowUpLeft,
} from 'lucide-react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer
      dir='rtl'
      className='relative overflow-hidden border-t border-white/10 bg-[#07101D] text-white'>

      {/* Background Blur */}
      <div className='absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl' />

      <div className='relative container mx-auto max-w-7xl px-6 py-20'>

        {/* Top Section */}
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>

          {/* Brand */}
          <div className='lg:col-span-5'>

            <Link href='/' className='inline-block'>
              <Image
                src={getImgPath('/images/logo/hezhaaaa.png')}
                alt='لوگو'
                width={50}
                height={40}
                quality={100}
                unoptimized
              />
            </Link>

            <h2 className='mt-8 text-3xl font-extrabold leading-[60px]'>
              آینده کسب‌وکار خود را
              <span className='text-primary'> حرفه‌ای </span>
              بسازید
            </h2>

            <p className='mt-6 max-w-md leading-8 text-white/60'>
              ما با طراحی مدرن، توسعه حرفه‌ای و استراتژی دیجیتال به رشد برند
              شما کمک می‌کنیم.
            </p>

            <div className='mt-8 flex flex-wrap gap-4'>

              <Link
                href='/contact'
                className='group flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-medium transition hover:scale-105 hover:bg-blue-600'>

                شروع همکاری

                <ArrowUpLeft
                  size={18}
                  className='transition group-hover:-translate-x-1 group-hover:-translate-y-1'
                />

              </Link>

              <Link
                href='/portfolio'
                className='rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-medium text-white/80 transition hover:border-primary hover:bg-primary/10 hover:text-white'>

                مشاهده نمونه‌کارها

              </Link>

            </div>

          </div>

          {/* Quick Links */}
          <div className='lg:col-span-3'>

            <h3 className='mb-6 text-xl font-bold'>
              دسترسی سریع
            </h3>

            <ul className='space-y-5 text-white/60'>

              <li>
                <Link
                  href='/#about'
                  className='transition hover:pr-2 hover:text-primary'>

                  درباره ما

                </Link>
              </li>

              <li>
                <Link
                  href='/#services'
                  className='transition hover:pr-2 hover:text-primary'>

                  خدمات

                </Link>
              </li>

              <li>
                <Link
                  href='/portfolio'
                  className='transition hover:pr-2 hover:text-primary'>

                  نمونه‌کارها

                </Link>
              </li>

              <li>
                <Link
                  href='/blog'
                  className='transition hover:pr-2 hover:text-primary'>

                  وبلاگ

                </Link>
              </li>

              <li>
                <Link
                  href='/contact'
                  className='transition hover:pr-2 hover:text-primary'>

                  تماس با ما

                </Link>
              </li>

            </ul>

          </div>

          {/* Contact & Newsletter */}
          <div className='lg:col-span-4'>

            <h3 className='mb-6 text-xl font-bold'>
              ارتباط با ما
            </h3>

            <div className='space-y-5'>

              <div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md'>

                <p className='mb-2 text-sm text-white/40'>
                  شماره تماس
                </p>

                <Link
                  href='tel:+989123456789'
                  className='text-lg font-semibold transition hover:text-primary'>

                  09910616048

                </Link>

              </div>

              <div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md'>

                <p className='mb-2 text-sm text-white/40'>
                  ایمیل
                </p>

                <Link
                  href='mailto:info@venus.com'
                  className='text-lg font-semibold transition hover:text-primary'>

                  info@hezhaco.ir

                </Link>

              </div>

            </div>

            {/* Newsletter */}
            <div className='mt-8'>

              <h4 className='mb-4 font-bold'>
                عضویت در خبرنامه
              </h4>

              <form className='flex items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5'>

                <input
                  type='email'
                  placeholder='ایمیل خود را وارد کنید'
                  className='w-full bg-transparent px-5 py-4 text-sm outline-none placeholder:text-white/30'
                />

                <button
                  type='submit'
                  className='flex h-14 w-14 items-center justify-center bg-primary transition hover:bg-blue-600'>

                   <ArrowUpLeft
                  size={18}
                  className='transition group-hover:-translate-x-1 group-hover:-translate-y-1'
                />

                </button>

              </form>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className='my-10 h-px w-full bg-white/10' />

        {/* Bottom */}
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>

          <p className='text-sm text-white/40'>
            © 2026 تمامی حقوق برای HezhaGroup محفوظ است.
          </p>

          {/* Social */}
         {/* Social */}
<div className='flex items-center gap-4'>

  <Link
    href='#'
    className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white'>

    <FaInstagram size={18} />

  </Link>

  <Link
    href='#'
    className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white'>

    <FaFacebookF size={18} />

  </Link>

  <Link
    href='#'
    className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white'>

    <FaLinkedinIn size={18} />

  </Link>

</div>

        </div>

      </div>
    </footer>
  )
}

export default Footer