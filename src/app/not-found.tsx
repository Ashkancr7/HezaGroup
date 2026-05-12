import HeroSub from "@/components/SharedComponent/HeroSub";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه 404 | هیژا",
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "خانه" },
    { href: "/404", text: "۴۰۴" },
  ];

  return (
    <>
      <HeroSub
        title="۴۰۴"
        description="صفحه‌ای که به دنبال آن هستید پیدا نشد."
        breadcrumbLinks={breadcrumbLinks}
      />

      <NotFound />
    </>
  );
};

export default ErrorPage;