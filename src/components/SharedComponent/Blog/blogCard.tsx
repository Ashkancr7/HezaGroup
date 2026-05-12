import React from 'react'
import Image from 'next/image'
import { Blog } from '@/types/blog'
import { format } from 'date-fns'
import Link from 'next/link'

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date, slug } = blog

  return (
    <div dir='rtl' className='group relative mb-0'>

      {/* تصویر */}
      <div className='mb-8 overflow-hidden rounded-sm'>
        <Link href={`/blog/${slug}`} aria-label='تصویر مقاله' className='block'>

          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${coverImage}`}
            alt="image"
            width={408}
            height={272}
            className="w-full transition group-hover:scale-125"
            quality={100}
          />

        </Link>
      </div>

      {/* برچسب */}
      {/* <div className='absolute right-4 top-4 rounded-sm bg-primary px-5 py-2'>

        <span className='text-sm font-medium text-white'>
          دسته‌بندی
        </span>

      </div> */}

      {/* محتوا */}
      <div className='text-right'>

        {/* عنوان */}
        <h3>

          <Link
            href={`/blog/${slug}`}
            className='mb-4 inline-block text-[22px] font-semibold leading-tight text-black transition hover:text-primary dark:text-white dark:hover:text-primary'>

            {title}

          </Link>

        </h3>

        {/* تاریخ */}
        <span className='text-sm font-semibold leading-loose text-gray-500 dark:text-white/60'>
          {format(new Date(date), 'dd MMM yyyy')}
        </span>

      </div>
    </div>
  )
}

export default BlogCard