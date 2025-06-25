import Head from "next/head";
import HeroSection from "./home-sections/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Site.Set - Início</title>
      </Head>

      <HeroSection />
    </>
  );
}
