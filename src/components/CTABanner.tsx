import { Store } from "lucide-react";
import * as React from "react";
import Title from "./Title";
import CTAButton from "./CTAButton";

const CTABanner = () => {
  return (
    <section className="py-[56px] px-1.5 md:pt-9 md:pb-7 flex flex-col items-center gap-3 md:gap-4 relative bg-[url(/assets/cta-bg-mobile.svg)] md:bg-[url(/assets/cta-bg-mobile.svg)] bg-no-repeat bg-cover">
      <div className="p-[14px] md:p-[16px] bg-cyan-300 rounded-full w-fit absolute top-0 -translate-y-1/2">
        <Store size={28} className="md:hidden text-cyan-100" />
        <Store size={32} className="hidden md:block text-cyan-100" />
      </div>

      <Title as="h1" size="md" className="md:text-heading-xl text-gray-100 w-full max-w-45 text-center">
        Crie uma loja online e inicie suas vendas ainda hoje
      </Title>

      <CTAButton />
    </section>
  );
};

export default CTABanner;
