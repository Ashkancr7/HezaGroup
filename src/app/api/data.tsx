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
    value: '50',
    description:
      'تعداد رضایت‌نامه‌ها و نظرات مشتریان دریافت شده در سال 2024',
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
    img:'images/portfolio/academia.webp',
    gallery: [
      getImgPath('/images/portfolio/academia.webp'),
    ],
    alt: 'آکادمی هایر',
    title: 'Academiahire',
    slug: 'academi',
    info: 'طراحی وبسایت',
    description:
      'طراحی و پیاده‌سازی وبسایت آکادمی هایر با تمرکز بر تجربه کاربری، سرعت بالا، ساختار سئو محور و طراحی مدرن.',
    techStack: ['Next.js', 'Tailwind CSS', 'SEO','Laravel,Mysql'],
    liveUrl: 'academiahire.com',
    githubUrl: '',
    Class: 'md:mt-0',
  },

  {
    image: getImgPath('/images/portfolio/ananas.webp'),
    img:'images/portfolio/ananas.webp',
    gallery: [
      getImgPath('/images/portfolio/ananas.webp'),
    ],
    alt: 'آناناس',
    title: 'Ananas',
    slug: 'ananas',
    info: 'طراحی اپلیکیشن',
    description:
      'طراحی رابط کاربری و تجربه کاربری اپلیکیشن آناناس با تمرکز بر سادگی، دسترسی‌پذیری و تجربه کاربری روان.',
    techStack: ['React Native', 'UI/UX Design','React','Tailwind CSS','AtomicDesign'],
    liveUrl: 'https://www.ananaslc.com/',
    githubUrl: '',
    Class: 'md:mt-24',
  },

  {
    image: getImgPath('/images/portfolio/hidrolojy.webp'),
    img:'images/portfolio/hidrolojy.webp',
    gallery: [
      getImgPath('/images/portfolio/hidrolojy.webp'),
    ],
    alt: 'کتاب حل المسائل هیدرولوژی',
    title: 'کتاب حل المسائل هیدرولوژی',
    slug: 'book',
    info: 'طراحی اپلیکیشن',
    description:
      'طراحی اپلیکیشن آموزشی برای کتاب حل‌المسائل هیدرولوژی با تمرکز بر مطالعه آسان و تجربه کاربری علمی.',
    techStack: ['React', 'UI/UX Design','React','Tailwind CSS','AtomicDesign'],
    liveUrl: 'https://cafebazaar.ir/app/com.asd3',
    githubUrl: '',
    Class: 'md:mt-0',
  },

  {
    image: getImgPath('/images/portfolio/payakam.webp'),
    img:'images/portfolio/payakam.webp',
    gallery: [
      getImgPath('/images/portfolio/payakam.webp'),
    ],
    alt: 'پنل کاربری پایاکام',
    title: 'پنل کاربری',
    slug: 'payakam',
    info: 'طراحی پنل',
    description:
      'طراحی پنل مدیریت و کاربری سایت پایاکام با تمرکز بر کارایی، خوانایی داده‌ها و تجربه کاربری حرفه‌ای.',
    techStack: ['Next.js', 'Dashboard UI', 'Tailwind CSS','Laravel'],
    liveUrl: 'https://www.panel.payacom.com/login',
    githubUrl: '',
    Class: 'md:mt-24',
  },

  {
    image: getImgPath('/images/portfolio/deepchat_landing.webp'),
    img:'images/portfolio/deepchat_landing.webp',
    gallery: [
      getImgPath('/images/portfolio/deepchat_landing.webp'),
    ],
    alt: 'لندینگ دیپ‌چت',
    title: 'لندینگ معرفی چت بات دیپ‌چت',
    slug: 'deepchat-landing',
    info: 'طراحی لندینگ',
    description:
      'طراحی لندینگ پیج معرفی چت‌بات DeepChat با تمرکز بر نرخ تبدیل (Conversion) و ارائه واضح ارزش محصول.',
    techStack: ['React.js', 'Landing Page', 'SEO','Ai','Python','Next.js',],
    liveUrl: 'deepchatai.ir',
    githubUrl: '',
    Class: 'md:mt-0',
  },

 

  {
    image: getImgPath('/images/portfolio/etehad.webp'),
    img:'images/portfolio/etehad.webp',
    gallery: [
      getImgPath('/images/portfolio/etehad.webp'),
    ],
    alt: 'اپلیکیشن قرآنی اتحاد',
    title: 'اپلیکیشن قرآنی اتحاد',
    slug: 'etehad',
    info: 'طراحی اپلیکیشن',
    description:
      'طراحی اپلیکیشن قرآنی اتحاد با تمرکز بر تجربه کاربری معنوی، سادگی رابط و دسترسی آسان به محتوا.',
    techStack: ['Mobile UI', 'Islamic App Design','Responsive','python','Ai'],
    liveUrl: '',
    githubUrl: '',
    Class: 'md:mt-24',
  },

   {
    image: getImgPath('/images/portfolio/deepchat_landing.webp'),
    img:'images/portfolio/deepchat_landing.webp',
    gallery: [
      getImgPath('/images/portfolio/deepchat_landing.webp'),
    ],
    alt: 'چت بات هوش مصنوعی DeepChat',
    title: 'چت بات هوش مصنوعی',
    slug: 'deepchat-ai',
    info: 'چت بات هوش مصنوعی دستیار و پشتیبان سایت DeepChat',
    description:
      'طراحی و پیاده‌سازی رابط کاربری چت‌بات هوش مصنوعی DeepChat به‌عنوان دستیار هوشمند و پشتیبان آنلاین سایت.',
    techStack: ['AI Chatbot', 'Next.js', 'UX Writing','React','WebSocket'],
    liveUrl: 'deepchatai.ir',
    githubUrl: '',
    Class: 'md:mt-0',
  },
]
