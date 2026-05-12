import React from 'react'
import Link from 'next/link'

const ContactInfo = () => {
  return (
    <section dir='rtl' className='pt-8 pb-16 md:pb-24 dark:bg-darkmode'>

      <div className='container mx-auto max-w-6xl px-4'>

        <div className='flex flex-col items-start justify-center gap-8 md:flex-row md:items-center md:gap-28'>

          {/* ایمیل */}
          <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8'>

            <div className='flex h-3.75 w-3.75 items-center justify-center rounded-full bg-primary/20'>
              <i className="inline-block h-8 w-8 bg-[url('/images/contact-page/email.svg')] bg-contain bg-no-repeat"></i>
            </div>

            <div className='flex h-full flex-col justify-between sm:flex-row md:flex-col sm:items-center md:items-start'>

              <div>

                <span className='text-xl font-bold text-midnight_text dark:text-white'>
                  ایمیل ما
                </span>

                <p className='max-w-80 py-3 text-lg font-normal text-DeepOcean dark:text-white/50'>
                  در صورت تمایل پیام خود را ارسال کنید، در سریع‌ترین زمان پاسخ می‌دهیم
                </p>

              </div>

              <div>

                <Link
                  href='#'
                  className='group flex items-center gap-3 text-base font-medium text-primary hover:text-midnight_text dark:hover:text-white'>

                  ارسال پیام

                  <svg
                    width='23'
                    height='17'
                    viewBox='0 0 23 17'
                    fill='#2F73F2'
                    xmlns='http://www.w3.org/2000/svg'
                    className='transition group-hover:fill-midnight_text dark:group-hover:fill-white rotate-180'>

                    <path d='M22.653 7.76352L15.3613 0.471852C15.1648 0.282104 14.9017 0.177109 14.6286 0.179483C14.3555 0.181856 14.0942 0.291407 13.9011 0.484541C13.7079 0.677674 13.5984 0.938937 13.596 1.21206C13.5936 1.48518 13.6986 1.74831 13.8884 1.94477L19.4019 7.45831H1.08317C0.806904 7.45831 0.541951 7.56806 0.346601 7.76341C0.151251 7.95876 0.0415039 8.22371 0.0415039 8.49998C0.0415039 8.77625 0.151251 9.0412 0.346601 9.23655C0.541951 9.4319 0.806904 9.54165 1.08317 9.54165H19.4019L13.8884 15.0552C13.7889 15.1513 13.7095 15.2662 13.6549 15.3933C13.6003 15.5204 13.5716 15.6571 13.5704 15.7954C13.5692 15.9337 13.5956 16.0709 13.6479 16.1989C13.7003 16.3269 13.7777 16.4432 13.8755 16.541C13.9733 16.6388 14.0896 16.7162 14.2176 16.7685C14.3456 16.8209 14.4828 16.8473 14.6211 16.8461C14.7594 16.8449 14.8961 16.8161 15.0232 16.7615C15.1503 16.707 15.2652 16.6276 15.3613 16.5281L22.653 9.23644C22.8482 9.0411 22.958 8.77619 22.958 8.49998C22.958 8.22377 22.8482 7.95886 22.653 7.76352Z' />
                  </svg>

                </Link>

              </div>

            </div>
          </div>

          {/* همکاری */}
          <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8'>

            <div className='flex h-3.75 w-3.75 items-center justify-center rounded-full bg-primary/20'>
              <i className="inline-block h-9 w-9 bg-[url('/images/contact-page/Career.svg')] bg-contain bg-no-repeat"></i>
            </div>

            <div className='flex h-full flex-col justify-between sm:flex-row md:flex-col sm:items-center md:items-start'>

              <div>

                <span className='text-xl font-bold text-midnight_text dark:text-white'>
                  فرصت‌های شغلی
                </span>

                <p className='max-w-80 py-3 text-lg font-normal text-DeepOcean dark:text-white/50'>
                  اگر علاقه‌مند به همکاری هستید، رزومه خود را ارسال کنید
                </p>

              </div>

              <div>

                <Link
                  href='#'
                  className='group flex items-center gap-3 text-base font-medium text-primary hover:text-midnight_text dark:hover:text-white'>

                  ارسال درخواست

                  <svg
                    width='23'
                    height='17'
                    viewBox='0 0 23 17'
                    fill='#2F73F2'
                    xmlns='http://www.w3.org/2000/svg'
                    className='transition group-hover:fill-midnight_text dark:group-hover:fill-white rotate-180'>

                    <path d='M22.653 7.76352L15.3613 0.471852C15.1648 0.282104 14.9017 0.177109 14.6286 0.179483C14.3555 0.181856 14.0942 0.291407 13.9011 0.484541C13.7079 0.677674 13.5984 0.938937 13.596 1.21206C13.5936 1.48518 13.6986 1.74831 13.8884 1.94477L19.4019 7.45831H1.08317C0.806904 7.45831 0.541951 7.56806 0.346601 7.76341C0.151251 7.95876 0.0415039 8.22371 0.0415039 8.49998C0.0415039 8.77625 0.151251 9.0412 0.346601 9.23655C0.541951 9.4319 0.806904 9.54165 1.08317 9.54165H19.4019L13.8884 15.0552C13.7889 15.1513 13.7095 15.2662 13.6549 15.3933C13.6003 15.5204 13.5716 15.6571 13.5704 15.7954C13.5692 15.9337 13.5956 16.0709 13.6479 16.1989C13.7003 16.3269 13.7777 16.4432 13.8755 16.541C13.9733 16.6388 14.0896 16.7162 14.2176 16.7685C14.3456 16.8209 14.4828 16.8473 14.6211 16.8461C14.7594 16.8449 14.8961 16.8161 15.0232 16.7615C15.1503 16.707 15.2652 16.6276 15.3613 16.5281L22.653 9.23644Z' />
                  </svg>

                </Link>

              </div>

            </div>
          </div>

        </div>

    

        <div className='border-b border-border dark:border-dark_border'></div>

      </div>
    </section>
  )
}

export default ContactInfo