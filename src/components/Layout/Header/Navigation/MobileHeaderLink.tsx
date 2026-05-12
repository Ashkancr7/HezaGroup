'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault(); // جلوگیری از رفتن به لینک وقتی زیرمنو دارد
      setSubmenuOpen(!submenuOpen);
    }
  };

  // چک کردن فعال بودن لینک اصلی یا فرزندان
  const isActive = path === item.href || 
                   (path.startsWith("/blog") && item.href === "/blog") || 
                   (path.startsWith("/portfolio") && item.href === "/portfolio");

  return (
    <div className="relative block w-full border-b border-gray-100 dark:border-gray-800 last:border-none">
      <Link 
        href={item.href} 
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-3 px-4 transition-all duration-300 ${
          isActive 
          ? 'text-primary font-bold bg-blue-50/50 dark:bg-primary/10' 
          : 'text-black dark:text-white/70'
        }`}
      >
        <span className="text-base">{item.label}</span>
        
        {item.submenu && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1.2em" 
            height="1.2em" 
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${submenuOpen ? 'rotate-180' : ''}`}
          >
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>

      {/* بخش زیرمنو */}
      {submenuOpen && item.submenu && (
        <div className="bg-gray-50 dark:bg-darklight/30 transition-all">
          {item.submenu.map((subItem, index) => (
            <Link 
              key={index} 
              href={subItem.href} 
              className={`block py-3 pr-10 pl-4 text-sm hover:text-primary transition-colors ${
                path === subItem.href ? 'text-primary font-medium' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;