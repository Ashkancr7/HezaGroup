import { portfolioinfo } from '@/app/api/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // ۱. حتماً باید await بشه
  const { slug } = await params;

  // ۲. پیدا کردن دیتا با دقت بالا (حذف فاصله‌های احتمالی و هماهنگی حروف)
  const project = portfolioinfo.find(
    (p) => p.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );

  // ۳. اگر پیدا نشد
  if (!project) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold dark:text-white">{project.title}</h1>
      <div className="mt-10 relative h-96 w-full">
         <Image 
            src={project.image} 
            alt={project.alt} 
            fill 
            className="object-cover rounded-xl"
         />
      </div>
      <p className="mt-10 text-lg dark:text-gray-300">{project.description || project.info}</p>
    </div>
  );
}
