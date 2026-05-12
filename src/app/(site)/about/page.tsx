import React from 'react'
import HeroSub from '@/components/SharedComponent/HeroSub'
import { Metadata } from 'next'
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress'

export const metadata: Metadata = {
  title: 'درباره ما | هیژا',
}

const page = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'خانه' },
    { href: '/about', text: 'درباره ما' },
  ]

  return (
    <div dir='rtl' className='text-right'>
      <HeroSub
        title='درباره ما'
        description='با مجموعه‌ای از مطالب ارزشمند و کاربردی آشنا شوید که با دقت طراحی شده‌اند تا شما را با جدیدترین ترندها و راهکارهای حرفه‌ای آشنا کنند.'
        breadcrumbLinks={breadcrumbLinks}
      />

      <Counter isColorMode={true} />

      <Progresswork isColorMode={true} />
    </div>
  )
}

export default page