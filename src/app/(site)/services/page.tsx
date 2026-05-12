import React from 'react'
import HeroSub from '@/components/SharedComponent/HeroSub'
import { Metadata } from 'next'
import Services from '@/components/Home/Services'

export const metadata: Metadata = {
  title: 'خدمات | هیژا',
}

const page = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'خانه' },
    { href: '/services', text: 'خدمات' },
  ]

  return (
    <div dir='rtl' className='text-right'>
      <HeroSub
        title='خدمات ما'
        description='مجموعه‌ای از خدمات حرفه‌ای و تخصصی را برای رشد کسب‌وکار، طراحی مدرن و توسعه دیجیتال تجربه کنید.'
        breadcrumbLinks={breadcrumbLinks}
      />

      <Services />
    </div>
  )
}

export default page