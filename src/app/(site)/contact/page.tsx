import React from 'react'
import { Metadata } from 'next'

import ContactForm from '@/components/Contact/Form'
import ContactInfo from '@/components/Contact/ContactInfo'
import Location from '@/components/Contact/OfficeLocation'
import HeroSub from '@/components/SharedComponent/HeroSub'

export const metadata: Metadata = {
  title: 'تماس با ما | هیژا',
  description: 'صفحه تماس با ما برای ارتباط با تیم Venus',
}

const Page = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'خانه' },
    { href: '/contact', text: 'تماس با ما' },
  ]

  return (
    <main dir='rtl' className='w-full'>

      <HeroSub
        title='تماس با ما'
        description='برای ارتباط با ما و دریافت مشاوره، از طریق فرم یا اطلاعات تماس زیر اقدام کنید.'
        breadcrumbLinks={breadcrumbLinks}
      />

      <ContactInfo />

      <ContactForm />

      <Location />

    </main>
  )
}

export default Page