import Head from "next/head";
import HeroSection from "./home-sections/HeroSection";
import FeaturesSection from "./home-sections/Features/FeaturesSection";
import SupportSection from "./home-sections/Support/SupportSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Site.Set - Início</title>
      </Head>

      <HeroSection />
      <FeaturesSection />
      <SupportSection />
    </>
  );
}
