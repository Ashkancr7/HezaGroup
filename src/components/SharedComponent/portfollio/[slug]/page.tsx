import { notFound } from 'next/navigation'
import { portfolioinfo } from '@/app/api/data'
import Image from 'next/image'
import Link from 'next/link'

export default async function PortfolioDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = portfolioinfo.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  )

  if (!project) {
    notFound()
  }

  return (
    console.log(slug),
    <div className='min-h-screen py-24 px-6 bg-white dark:bg-darkmode'>
      <div className='max-w-5xl mx-auto'>
        {/* Title */}
        <h1 className='text-4xl md:text-6xl font-bold mb-8 dark:text-white'>
          {project.title}
        </h1>

        {/* Main Image */}
        <div className='relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-10'>
          <Image
            src={project.image}
            alt={project.alt}
            fill
            className='object-cover'
          />
        </div>

        {/* Description */}
        <p className='text-lg leading-8 text-gray-600 dark:text-gray-300 mb-10'>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className='mb-10'>
          <h3 className='text-2xl font-semibold mb-4 dark:text-white'>
            تکنولوژی‌های استفاده شده
          </h3>
          <div className='flex flex-wrap gap-3'>
            {project.techStack?.map((tech, index) => (
              <span
                key={index}
                className='px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className='flex gap-6'>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target='_blank'
              className='px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition'
            >
              مشاهده دمو
            </Link>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target='_blank'
              className='px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition'
            >
              گیت‌هاب
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return portfolioinfo.map((item) => ({
    slug: item.slug,
  }))
}
