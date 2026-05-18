import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroSub from '@/components/SharedComponent/HeroSub'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'اعضای تیم | هیژا',
}

const Testimonial = () => {
  // const breadcrumbLinks = [
  //   { href: '/', text: 'خانه' },
  //   { href: '/team', text: 'اعضای تیم' },
  // ]

  const teamMembers = [
    {
      id: 1,
      image: '/images/team/hero-image.png',
      name: 'علی محمدی',
      role: 'توسعه‌دهنده فرانت‌اند',
      description:
        'متخصص React و Next.js با تجربه طراحی رابط کاربری مدرن',
    },

    {
      id: 2,
      image: '/images/team/hero-profile-1.jpg',
      name: 'محمد رضایی',
      role: 'طراح UI/UX',
      description:
        'طراحی رابط کاربری حرفه‌ای و تجربه کاربری خلاقانه',
    },

    {
      id: 3,
      image: '/images/team/hero-profile-2.jpg',
      name: 'سارا احمدی',
      role: 'بک‌اند دولوپر',
      description:
        'توسعه API و معماری سمت سرور با Node.js',
    },

    {
      id: 4,
      image: '/images/team/hero-profile-3.jpg',
      name: 'محمد کریمی',
      role: 'دیجیتال مارکتر',
      description:
        'متخصص سئو و استراتژی بازاریابی دیجیتال',
    },
  ]

  return (
    <div dir='rtl' className='text-right dark:bg-darkmode'>

      {/* هدر */}
      {/* <HeroSub
        title='اعضای تیم'
        description='با اعضای حرفه‌ای و خلاق تیم ما آشنا شوید؛ افرادی متخصص که با تجربه و مهارت بالا بهترین پروژه‌ها را خلق می‌کنند.'
        breadcrumbLinks={breadcrumbLinks}
      /> */}

      {/* لیست اعضا */}
      <section
        id='team'
        className='md:pb-24 pb-16 pt-8'>

        <div className='flex flex-wrap gap-[2.125rem] lg:px-[2.125rem] px-4 max-w-[120rem] w-full justify-center m-auto'>

          {teamMembers.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.id}`}
              passHref>

              <div className='w-[18rem] group'>

                {/* تصویر */}
                <div className='relative overflow-hidden rounded-2xl transition-all duration-500 group-hover:scale-[1.05] group-hover:cursor-pointer shadow-lg'>

                  <Image
                    src={member.image}
                    alt={member.name}
                    width={1200}
                    height={800}
                    style={{ width: '100%', height: 'auto' }}
                    className='object-cover'
                  />

                </div>

                {/* نام */}
                <h4 className='pb-[0.3125rem] pt-[2.1875rem] text-2xl font-bold text-midnight_text transition-all duration-300 group-hover:text-primary dark:text-white'>
                  {member.name}
                </h4>

                {/* سمت */}
                <p className='text-primary font-semibold text-lg'>
                  {member.role}
                </p>

                {/* توضیحات */}
                <p className='pt-2 text-secondary text-base leading-7 transition-all duration-300 group-hover:text-primary dark:text-white/50'>
                  {member.description}
                </p>

              </div>

            </Link>
          ))}

        </div>
      </section>
    </div>
  )
}

export default Testimonial