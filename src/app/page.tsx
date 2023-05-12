import Image from "next/image";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import FeatureTabs from "@/app/components/FeatureTabs";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Features />

      <FeatureTabs />
    </>
  );
}
