import React from 'react'
import Link from 'next/link'

const Location = () => {
  return (
    <section dir="rtl" className='bg-primary md:py-24 py-16 text-right'>
      <div className='container mx-auto max-w-6xl px-4'>

        {/* دفتر اول */}
        <div className='grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 border-b border-white/50 pb-11'>

          <div className='col-span-3'>
            <h2 className='text-white max-w-56 text-[25px] leading-tight font-bold'>
              دفتر مرکزی 
            </h2>
          </div>

          <div className='col-span-3'>
            <p className='sm:text-xl text-xl text-white/70 font-normal max-w-64 leading-7'>
            کردستان-سنندج-دانشگاه کردستان-مرکز رشد واحدهای فناور-واحد2
            </p>
          </div>

          <div className='col-span-3'>
            <Link
              href='mailto:headoffice@venus.com'
              className='sm:text-2xl text-xl text-white font-medium underline block'>
              info@hezhaco.ir
            </Link>

            <Link
              href='tel:731-621-5503'
              className='sm:text-2xl text-xl text-white/80 flex items-center gap-2 hover:text-white w-fit mt-2'>
              <span className='text-white/50'>تماس:</span>
              09910616048
            </Link>
          </div>

        </div>

        {/* دفتر دوم */}
        {/* <div className='grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 pt-12'>

          <div className='col-span-3'>
            <h2 className='text-white max-w-52 text-[40px] leading-tight font-bold'>
              دفتر بنگلور
            </h2>
          </div>

          <div className='col-span-3'>
            <p className='sm:text-2xl text-xl text-white/70 font-normal max-w-64 leading-7'>
              خیابان مارکوس 3502، جرالدین، کد پستی 35974
            </p>
          </div>

          <div className='col-span-3'>
            <Link
              href='mailto:Office@venus.com'
              className='sm:text-2xl text-xl text-white font-medium underline block'>
              Office@venus.com
            </Link>

            <Link
              href='tel:731-235-7993'
              className='sm:text-2xl text-xl text-white/80 flex items-center gap-2 hover:text-white w-fit mt-2'>
              <span className='text-white/50'>تماس:</span>
              731-235-7993
            </Link>
          </div>

        </div> */}

      </div>
    </section>
  )
}

export default Location