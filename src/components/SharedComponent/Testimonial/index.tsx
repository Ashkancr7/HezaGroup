import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroSub from '@/components/SharedComponent/HeroSub'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'اعضای تیم | هیژا',
}

const Testimonial = () => {
  const breadcrumbLinks = [
    
    { href: '/team', text: '' },
  ]

  const teamMembers = [
    {
      id: 1,
      image: '/images/team/ashkan.webp',
      name: 'اشکان اسدی',
      role: 'توسعه‌دهنده فرانت‌اند',
      description:
        'متخصص React و Next.js با تجربه طراحی رابط کاربری مدرن/سابقه کار +5',
    },

    {
      id: 2,
      image: '/images/team/bakhtiar.webp',
      name: "بختیار کمانگر",
      role: 'بک‌اند دولوپر/laravel',
      description:
        'برنامه نویس بک اند / لاراول/سابقه کار +8',
    },

    {
      id: 3,
      image: '/images/team/mohamad.webp',
      name: 'محمد کرمی',
      role: 'بک‌اند دولوپر/laravel',
      description:
        'برنامه نویس بک‌اند/laravel /  سابقه کار +6'
    },

    {
      id: 4,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Reza',
      name: 'سید‌عرفان حسینی',
      role: 'دیجیتال مارکتر',
      description:
        'متخصص سئو و استراتژی بازاریابی دیجیتال/سابقه کار+5',
    },
    {
      id: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Reza',
      name: 'شهریار زندکریمی',
      role: 'بک‌‌اند دولوپر/پایتون',
      description:
        'برنامه نویس بک‌اند/پایتون و هوش مصنوعی/سابقه کار +1',
    },
  ]

  return (
    <div dir='rtl' className='text-right dark:bg-darkmode'>

      {/* هدر */}
      <HeroSub
        title='اعضای تیم'
        description='با اعضای حرفه‌ای و خلاق تیم ما آشنا شوید؛ افرادی متخصص که با تجربه و مهارت بالا بهترین پروژه‌ها را خلق می‌کنند.'
        breadcrumbLinks={breadcrumbLinks}
      />

      {/* لیست اعضا */}
      <section
        id='team'
        className='md:pb-24 pb-16 pt-8'>

        <div className='flex flex-wrap gap-[2.125rem] lg:px-[2.125rem] px-4 max-w-[120rem] w-full justify-center m-auto'>

          {teamMembers.map((member) => (
            <Link
              key={member.id}
              // href={`/team/${member.id}`}
              href={'#'}
              passHref>

              <div className='w-[18rem] group'>

                {/* تصویر */}
                <div className='overflow-hidden rounded-2xl shadow-lg h-[340px]'>

                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                     className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105'
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