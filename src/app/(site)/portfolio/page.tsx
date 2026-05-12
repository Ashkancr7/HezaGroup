import React from 'react'
import Portfolio from '@/components/portfolio/PortfolioList'
import HeroSub from '@/components/SharedComponent/HeroSub'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'نمونه‌کارها | هیژا',
}

const PortfolioList = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'خانه' },
    { href: '/portfolio', text: 'نمونه‌کارها' },
  ]

  return (
    <div dir='rtl' className='text-right'>
      <HeroSub
        title='نمونه‌کارها'
        description='مجموعه‌ای منتخب از بهترین پروژه‌ها که مهارت‌ها و تجربه‌های حرفه‌ای در حوزه‌های مختلف را نمایش می‌دهد.'
        breadcrumbLinks={breadcrumbLinks}
      />

      <Portfolio />
    </div>
  )
}

export default PortfolioList