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
        <div className="min-h-screen bg-white dark:bg-darkmode py-20 px-4 sm:px-6 transition-colors duration-300" dir="rtl">
            <div className="max-w-6xl mx-auto lg:mt-[80px]">

                {/* هدر مینیمال */}
                <div className="mb-12 space-y-3  dark:border-white/10 pb-6 text-right">
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                        {project.title}
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
                        {project.info}
                    </p>
                </div>

                {/* کانتینر اصلی */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start w-full">

                    {/* بخش محتوای اصلی (فقط عکس) - عرض 65 درصد در دسکتاپ */}
                    <div className="w-full lg:w-[65%] flex flex-col gap-8">
                        <div className="w-full shrink-0">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={1000}
                                height={600}
                                priority
                                className="w-full h-[250px] sm:h-[400px] lg:h-[450px] object-cover rounded-2xl bg-gray-50 dark:bg-white/5 ring-1 ring-gray-900/5 dark:ring-white/10"
                            />
                        </div>
                    </div>

                    {/* سایدبار اطلاعات (توضیحات، تکنولوژی‌ها و لینک‌ها) - عرض 35 درصد در دسکتاپ */}
                    <div className="w-full lg:w-[35%] sticky top-32 flex flex-col gap-8 bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-2xl ring-1 ring-gray-100 dark:ring-white/10">

                        {/* توضیحات (منتقل شد اینجا) */}
                        <div className="text-gray-600 dark:text-gray-300 leading-8 text-base md:text-sm text-justify">
                            <p>{project.description}</p>
                        </div>

                        {/* تکنولوژی‌ها */}
                        <div>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-5 border-b border-gray-200 dark:border-white/10 pb-3">
                                تکنولوژی‌های استفاده شده
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-white dark:bg-darkmode text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-white/10 shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* لینک‌ها */}
                        <div className="flex flex-col gap-3">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl?.startsWith('http') ? project.liveUrl : `https://${project.liveUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center px-6 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-md shadow-primary/20"
                                >
                                    مشاهده وبسایت
                                </a>
                            )}

                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center px-6 py-3 bg-white dark:bg-transparent text-gray-900 dark:text-white text-sm font-bold rounded-xl border border-gray-200 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
                                >
                                    سورس‌کد در گیت‌هاب
                                </a>
                            )}

                            {!project.liveUrl && !project.githubUrl && (
                                <p className="text-gray-400 dark:text-gray-500 text-sm font-medium text-center bg-white/50 dark:bg-black/20 py-3 rounded-xl">
                                    لینک فعالی ثبت نشده.
                                </p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
