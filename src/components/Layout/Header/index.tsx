'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import Signin from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react/dist/iconify.js'
import { SuccessfullLogin } from '@/components/Auth/AuthDialog/SuccessfulLogin'
import { FailedLogin } from '@/components/Auth/AuthDialog/FailedLogin'
import { UserRegistered } from '@/components/Auth/AuthDialog/UserRegistered'
import AuthDialogContext from '@/app/context/AuthDialogContext'

const Header: React.FC = () => {
  const pathUrl = usePathname()
  const { theme, setTheme } = useTheme()

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const authDialog = useContext(AuthDialogContext)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false)
    }

    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false)
    }

    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen, isSignInOpen, isSignUpOpen])

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  return (
    <header
      dir='rtl'
      className={`fixed top-0 z-50 w-full h-24 py-1 transition-all dark:bg-transparent ${
        sticky
          ? 'bg-white shadow-lg dark:bg-darklight dark:shadow-dark-md'
          : 'shadow-none'
      }`}>
      
      <div className='container mx-auto max-w-6xl flex items-center justify-between px-6 py-4'>

        {/* لوگو */}
        <Logo />

        {/* منوی دسکتاپ */}
        <nav className='hidden lg:flex items-center gap-8'>
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        {/* دکمه ها */}
        <div className='flex items-center gap-3'>

          {/* تغییر تم */}
          <button
            aria-label='تغییر تم'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100 dark:hover:bg-gray-800'>
            
            {/* Dark */}
            <svg
              viewBox='0 0 16 16'
              className={`hidden h-6 w-6 dark:block ${
                !sticky && pathUrl === '/' ? 'text-white' : ''
              }`}>
              <path
                d='M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z'
                fill='#FFFFFF'
              />
            </svg>

            {/* Light */}
            <svg
              viewBox='0 0 23 23'
              className={`h-7 w-7 dark:hidden ${
                !sticky && pathUrl === '/' ? 'text-white' : 'text-black'
              }`}>
              <path d='M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z' />
            </svg>
          </button>

          {/* ورود */}
          <Link
            href='#'
            // onClick={() => setIsSignInOpen(true)}
            className='hidden lg:block rounded-xl border border-primary px-5 py-2 text-primary transition hover:bg-primary hover:text-white'>
            ورود
          </Link>

          {/* ثبت نام */}
          <Link
            href='#'
            // onClick={() => setIsSignUpOpen(true)}
            className='hidden lg:block rounded-xl bg-primary px-5 py-2 text-white transition hover:bg-blue-700'>
            ثبت‌نام
          </Link>

          {/* منوی موبایل */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='lg:hidden flex flex-col gap-1'
            aria-label='باز کردن منو'>
            <span className='h-0.5 w-6 bg-black dark:bg-white'></span>
            <span className='h-0.5 w-6 bg-black dark:bg-white'></span>
            <span className='h-0.5 w-6 bg-black dark:bg-white'></span>
          </button>
        </div>
      </div>

      {/* مودال ورود */}
      {isSignInOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
          <div
            ref={signInRef}
            className='relative w-full max-w-md rounded-2xl bg-white px-8 py-14 dark:bg-darklight'>
            
            <button
              onClick={() => setIsSignInOpen(false)}
              className='absolute left-4 top-4 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800'>
              <Icon
                icon='ic:round-close'
                className='text-2xl dark:text-white'
              />
            </button>

            <Signin signInOpen={setIsSignInOpen} />
          </div>
        </div>
      )}

      {/* مودال ثبت نام */}
      {isSignUpOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
          <div
            ref={signUpRef}
            className='relative w-full max-w-md rounded-2xl bg-white px-8 py-14 dark:bg-darklight'>

            <button
              onClick={() => setIsSignUpOpen(false)}
              className='absolute left-4 top-4 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800'>
              <Icon
                icon='ic:round-close'
                className='text-2xl dark:text-white'
              />
            </button>

            <SignUp signUpOpen={setIsSignUpOpen} />
          </div>
        </div>
      )}

      {/* بک دراپ موبایل */}
      {navbarOpen && (
        <div className='fixed inset-0 z-40 bg-black/50'></div>
      )}

      {/* منوی موبایل */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-xs bg-white shadow-xl transition-transform duration-300 dark:bg-darkmode lg:hidden ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        
        <div className='flex items-center justify-between border-b p-4'>
          <h2 className='text-lg font-bold dark:text-white'>
            منو
          </h2>

          <button onClick={() => setNavbarOpen(false)}>
            <Icon
              icon='ic:round-close'
              className='text-2xl dark:text-white'
            />
          </button>
        </div>

        <nav className='flex flex-col items-start gap-3 p-4 text-right'>
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}

          <div className='mt-5 flex w-full flex-col gap-3'>
            <Link
              href='#'
              // onClick={() => {
              //   setIsSignInOpen(true)
              //   setNavbarOpen(false)
              // }}
              className='rounded-xl border border-primary px-4 py-3 text-center text-primary transition hover:bg-primary hover:text-white'>
              ورود
            </Link>

            <Link
              href='#'
              // onClick={() => {
              //   setIsSignUpOpen(true)
              //   setNavbarOpen(false)
              // }}
              className='rounded-xl bg-primary px-4 py-3 text-center text-white transition hover:bg-blue-700'>
              ثبت‌نام
            </Link>
          </div>
        </nav>
      </div>

      {/* اعلان موفق */}
      <div
        className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 ${
          authDialog?.isSuccessDialogOpen ? 'block' : 'hidden'
        }`}>
        <SuccessfullLogin />
      </div>

      {/* اعلان خطا */}
      <div
        className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 ${
          authDialog?.isFailedDialogOpen ? 'block' : 'hidden'
        }`}>
        <FailedLogin />
      </div>

      {/* اعلان ثبت نام */}
      <div
        className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 ${
          authDialog?.isUserRegistered ? 'block' : 'hidden'
        }`}>
        <UserRegistered />
      </div>
    </header>
  )
}

export default Header