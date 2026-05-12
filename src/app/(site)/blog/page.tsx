import React from 'react'
import BlogList from '@/components/Blog/BlogList'
import HeroSub from '@/components/SharedComponent/HeroSub'

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'خانه' },
    { href: '/blog', text: 'وبلاگ' },
  ]

  return (
    <div dir='rtl' className='text-right'>
      <HeroSub
        title='وبلاگ'
        description='مجموعه‌ای از مطالب آموزشی و تخصصی که به شما کمک می‌کند با جدیدترین ترندها، تکنولوژی‌ها و نکات کاربردی آشنا شوید.'
        breadcrumbLinks={breadcrumbLinks}
      />

      <BlogList />
    </div>
  )
}

export default BlogPage