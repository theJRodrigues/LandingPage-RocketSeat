import Head from "next/head";
import HeroSection from "./home-sections/HeroSection";
import FeaturesSection from "./home-sections/FeaturesSection/FeaturesSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Site.Set - Início</title>
      </Head>

      <HeroSection />
      <FeaturesSection />
    </>
  );
}
