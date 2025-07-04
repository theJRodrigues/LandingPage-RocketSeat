import Title from "@/components/Title";
import Head from "next/head";
import React from "react";
import SearchInput from "./components/SearchBtn";

export default function Blog() {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
    console.log(searchValue);
  };
  return (
    <>
      <Head>
        <title>Site.Set - Blog</title>
      </Head>
      <section>
        <header className="flex flex-col md:flex-row gap-2.5 md:gap-1">
          <div className="flex flex-col gap-[12px] md:w-1/2">
            <span className="py-[6px] px-[12px] rounded-[4px] font-body text-body-tag bg-cyan-200 text-cyan-100 w-fit">
              Blog
            </span>
            <Title as="h1" size="lg" className="text-gray-100 md:text-heading-xl">
              Dicas e estratégias para impulsionar seu negócio
            </Title>
          </div>
          <div className="w-full md:w-24 mt-auto ml-auto">
            <SearchInput state={searchValue} setState={handleSearch} />
          </div>
        </header>
      </section>
    </>
  );
}
