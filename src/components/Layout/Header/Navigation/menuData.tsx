import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "صفحه اصلی", href: "/" },
  { label: "درباره ما", href: "/about" },
  { label: "خدمات", href: "/services" },
  { label: "نمونه کارها", href: "/portfolio" },
  {
    label: "وبلاگ",
    href: "/blog",
    submenu: [
      { label: "لیست مقالات", href: "/blog" },
      { label: "جزئیات مقاله", href: "/blog/Blog_1" },
    ],
  },
  { label: "تماس با ما", href: "/contact" },
  // { label: "مستندات", href: "/documentation" },
];