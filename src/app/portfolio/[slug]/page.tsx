import Image from 'next/image';
import { notFound } from 'next/navigation';
import { portfolioinfo } from '@/app/api/data';

interface Project {
    title: string;
    slug: string;
    image: string;
    img: string;
    gallery?: string[];
    info: string;
    description: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
}

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return portfolioinfo.map((item) => ({
        slug: item.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const resolvedParams = await params;
    const decodedSlug = decodeURIComponent(resolvedParams.slug);

    const project = portfolioinfo.find((item) => item.slug === decodedSlug) as Project | undefined;

    if (!project) {
        notFound();
    }

    return (
        // بک‌گراند صفحه ست شده با darkmode نوبار
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode py-16 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300" dir="rtl">

            <div className="max-w-7xl mx-auto py-12 lg:mt-[80px]">

                {/* هدر صفحه */}
                <div className="mb-12 text-center lg:text-right">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                        {project.title}
                    </h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl text-right">
                        {project.info + " " + project.title}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 relative">

                    {/* محتوای اصلی */}
                    <div className="w-full lg:w-1/3 space-y-6"> {/* اینجا space-y رو از 8 به 6 کاهش دادم */}

                        {/* تصویر اصلی - با aspect-ratio کنترل‌شده */}
                        <div className="rounded-3xl shadow-lg dark:shadow-dark-md overflow-hidden group border border-transparent dark:border-white/5 relative aspect-[16/9]">
                            <Image
                                src={project.img}
                                alt={project.title}
                                width={600}
                                height={300}
                                // fill // از fill استفاده می‌کنیم که نسبت تصویر حفظ بشه
                                className='object-cover group-hover:scale-105 transition-transform duration-700'
                            />
                        </div>

                        {/* کارت توضیحات - کمی padding کمتر برای فشرده‌تر شدن */}
                        <div className="bg-white dark:bg-darklight p-6 md:p-8 rounded-3xl shadow-xl dark:shadow-dark-md border border-gray-100 dark:border-white/5 transition-colors">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 border-r-4 border-primary pr-4">
                                درباره پروژه
                            </h2>
                            <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base space-y-3">
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>


                    {/* سایدبار */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-24 space-y-6">

                            {/* باکس تکنولوژی‌ها */}
                            <div className="bg-white dark:bg-darklight p-6 rounded-3xl shadow-xl dark:shadow-dark-md border border-gray-100 dark:border-white/5 transition-colors">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                    تکنولوژی‌های استفاده شده
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            // استفاده از رنگ primary برای هماهنگی با تم اصلی
                                            className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl text-sm font-medium border border-primary/20 transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* باکس لینک‌ها */}
                            <div className="bg-white dark:bg-darklight p-6 rounded-3xl shadow-xl dark:shadow-dark-md border border-gray-100 dark:border-white/5 flex flex-col gap-4 transition-colors">
                                {project.liveUrl && (
                                    <a
                                        // این قسمت چک می‌کنه اگه http نداره، خودش اضافه کنه
                                        href={project.liveUrl?.startsWith('http') ? project.liveUrl : `https://${project.liveUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full text-center px-6 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                                    >
                                        مشاهده وبسایت
                                    </a>
                                )}

                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full text-center px-6 py-4 bg-gray-800 dark:bg-gray-700 text-white font-bold rounded-2xl shadow-md hover:bg-gray-900 dark:hover:bg-gray-600 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                                    >
                                        سورس‌کد در گیت‌هاب
                                    </a>
                                )}

                                {!project.liveUrl && !project.githubUrl && (
                                    <p className="text-center text-gray-500 dark:text-gray-400 text-sm font-medium py-2">
                                        لینک فعالی برای این پروژه ثبت نشده است.
                                    </p>
                                )}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
