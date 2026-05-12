import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import BlogCard from './blogCard'
import { getAllPosts } from '@/utils/markdown'

const Blog: React.FC = () => {
  const posts = getAllPosts([
    'title',
    'date',
    'excerpt',
    'coverImage',
    'slug',
  ]).slice(0, 3)

  return (
    <section
      dir='rtl'
      id='blog'
      className='flex flex-wrap justify-center bg-white dark:bg-darkmode'>

      <div className='container mx-auto max-w-6xl px-4'>

        {/* هدر بخش */}
        <div className='flex flex-wrap items-baseline justify-between'>

          {/* عنوان */}
          <h2
            className='mb-3 text-4xl font-bold text-midnight_text dark:text-white sm:mb-11'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            آخرین مقالات و اخبار
          </h2>

          {/* لینک بیشتر */}
          <Link
            href='#'
            className='flex items-center gap-2 pb-3 text-base font-medium text-midnight_text transition hover:text-primary dark:text-white dark:hover:text-primary sm:pb-0'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>

            مشاهده بیشتر

            <span className='rotate-180'>
              <Icon
                icon='solar:arrow-right-outline'
                width='30'
                height='30'
              />
            </span>
          </Link>
        </div>

        {/* کارت‌ها */}
        <div className='grid grid-cols-12 gap-7'>

          {posts.map((blog, i) => (
            <div
              key={i}
              className='col-span-12 w-full sm:col-span-6 md:col-span-4'
              data-aos='fade-up'
              data-aos-delay={`${i * 200}`}
              data-aos-duration='1000'>

              <BlogCard blog={blog} />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Blog