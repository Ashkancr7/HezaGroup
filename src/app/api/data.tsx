import { getImgPath } from '@/utils/image'

/* =========================
   منوی سایت
========================= */

export const menuItems = [
  { name: 'خانه', href: '#home' },
  { name: 'درباره ما', href: '#about' },
  { name: 'خدمات', href: '#services' },
  { name: 'نمونه‌کارها', href: '#portfolio' },
  { name: 'نظرات مشتریان', href: '#testimonials' },
  { name: 'وبلاگ', href: '/#blog' },
]

/* =========================
   آمار و ارقام
========================= */

export const count = [
  {
    icon: getImgPath('/images/counter/star.svg'),
    value: '4.86',
    description:
      'امتیاز ثبت شده از میان بیش از ۳۸۹۶ نظر کاربران در پلتفرم گوگل',
  },
  {
    icon: getImgPath('/images/counter/admin.svg'),
    value: '364',
    description:
      'تعداد رضایت‌نامه‌ها و نظرات مشتریان دریافت شده در سال ۲۰۲۱',
  },
  {
    icon: getImgPath('/images/counter/bag.svg'),
    value: '45M+',
    description:
      'درآمد ایجاد شده از طریق پروژه‌های جدید و کمپین‌های بازاریابی',
  },
]

/* =========================
   مهارت‌ها
========================= */

export const Progress = [
  {
    title: 'تحقیق و تست تجربه کاربری',
    Progress: 95,
  },
  {
    title: 'مدیریت محصول',
    Progress: 84,
  },
  {
    title: 'طراحی رابط و هویت بصری',
    Progress: 90,
  },
]

/* =========================
   خدمات
========================= */

export const Servicebox = [
  {
    icon: getImgPath('/images/services/ux-design-product_1.svg'),
    title: 'طراحی UX و محصول',
    description:
      'طراحی تجربه کاربری حرفه‌ای و خلق رابط‌های مدرن برای افزایش تعامل کاربران و رشد کسب‌وکار.',
  },
  {
    icon: getImgPath('/images/services/perfomance-optimization.svg'),
    title: 'بهینه‌سازی عملکرد',
    description:
      'افزایش سرعت، بهبود سئو و بهینه‌سازی عملکرد سایت و اپلیکیشن برای بهترین تجربه کاربری.',
  },
  {
    icon: getImgPath('/images/services/ux-design-product_2.svg'),
    title: 'طراحی رابط کاربری مدرن',
    description:
      'طراحی رابط‌های کاربری خلاقانه، مینیمال و واکنش‌گرا مطابق با استانداردهای روز دنیا.',
  },
]

/* =========================
   نمونه کارها
========================= */

export const portfolioinfo = [
  {
    image: getImgPath('/images/portfolio/academia.webp'),
    alt: 'نمونه کار',
    title: 'آکادمی هایر',
    slug: 'academi',
    info: 'طراحی وبسایت',
    Class: 'md:mt-0',
  },
  {
    image: getImgPath('/images/portfolio/ananas.jpeg'),
    alt: 'نمونه کار',
    title: 'آناناس',
    slug: 'Ananas',
    info: 'طراحی اپلیکیشن',
    Class: 'md:mt-24',
  },
  {
    image: getImgPath('/images/portfolio/hidrolojy.webp'),
    alt: 'نمونه کار',
    title: 'کتاب حل المسائل هیدرولوژی',
    slug: 'book',
    info: 'طراحی اپلیکیشن',
    Class: 'md:mt-0',
  },
  {
    image: getImgPath('/images/portfolio/payakam.webp'),
    alt: 'نمونه کار',
    title: ' پنل کاربری سایت پایاکام',
    slug: 'payakam',
    info: 'طراحی پنل',
    Class: 'md:mt-24',
  },
  {
    image: getImgPath('/images/portfolio/deepchat_landing.webp'),
    alt: 'نمونه کار',
    title: 'لندینگ معرفی چت بات دیپ‌چت',
    slug: 'deepchat-landing',
    info: 'طراحی لندینگ',
    Class: 'md:mt-0',
  },
  {
    image: getImgPath('/images/portfolio/deepchat_ai.webp'),
    alt: 'نمونه کار',
    title: 'جت بات هوش مصنوعی',
    slug: 'deepchat-ai',
    info: 'چت بات هوش مصنوعی دستیار و پشتیبان سایت DeepChat',
    Class: 'md:mt-0',
  },
  {
    image: getImgPath('/images/portfolio/etehad.webp'),
    alt: 'نمونه کار',
    title: 'اپلیکیشن قرآنی اتحاد',
    slug: 'etehad',
    info: 'طراحی اپلیکیشن',
    Class: 'md:mt-24',
  },
  // {
  //   image: getImgPath('/images/portfolio/mars.png'),
  //   alt: 'نمونه کار',
  //   title: 'نبولا هولدینگ',
  //   slug: 'nebula-holdings',
  //   info: 'رابط کاربری مدرن',
  //   Class: 'md:mt-0',
  // },
  // {
  //   image: getImgPath('/images/portfolio/panda-logo.png'),
  //   alt: 'نمونه کار',
  //   title: 'سامیت پارتنرز',
  //   slug: 'summit-partners',
  //   info: 'طراحی تجربه کاربری',
  //   Class: 'md:mt-24',
  // },
  // {
  //   image: getImgPath('/images/portfolio/roket-squred.png'),
  //   alt: 'نمونه کار',
  //   title: 'اپکس استراتژی',
  //   slug: 'apex-strategies',
  //   info: 'مشاوره و طراحی دیجیتال',
  //   Class: 'md:mt-0',
  // },
]