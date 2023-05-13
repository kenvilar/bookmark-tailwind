import Image from "next/image";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import FeatureTabs from "@/app/components/FeatureTabs";
import Download from "@/app/components/Download";
import DownloadBoxes from "@/app/components/DownloadBoxes";
import FAQ from "@/app/components/FAQ";
import FAQAccordion from "@/app/components/FAQAccordion";
import Newsletter from "@/app/components/Newsletter";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Features />

      <FeatureTabs />

      <Download />

      <DownloadBoxes />

      <FAQ />

      <FAQAccordion />

      <Newsletter />
    </>
  );
}
