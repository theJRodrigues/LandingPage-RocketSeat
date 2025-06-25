import Button from "@/components/Button";
import Title from "@/components/Title";
import { ArrowRight, Clock, Store } from "lucide-react";
import Image from "next/image";
import * as React from "react";

const HeroSection = () => {
  return (
    <section className="py-3 md:py-8 w-full max-w-40 md:max-w-none relative ">
      <div className="text-center flex flex-col gap-2.5 md:gap-3.5 items-center md:items-start md:text-start md:w-2/3 relative z-1">
        <Title size="lg" className="text-gray-100 md:text-heading-hg">
          Venda seus produtos como afiliado em um único lugar
        </Title>
        <div className="font-body text-body-sm md:text-body-md text-gray-100">
          <p className="flex items-center gap-1 mb-[4px] md:mb-[8px]">
            <Clock className="text-cyan-100 size-1.5 md:size-2" />
            Crie o seu site em menos de 5 minutos
          </p>
          <p className="flex items-center gap-1">
            <Store className="text-cyan-100 size-1.5 md:size-2" />
            Crie o seu site em menos de 5 minutos
          </p>
        </div>
        <div className="flex flex-col gap-[16px] mt-1.5 md:mt-1">
          <Button variant="primary" size={"lg"} className="flex gap-1 items-center">
            Criar loja grátis <ArrowRight />
          </Button>
          <span className="font-body text-body-xs text-gray-300">Não precisa de cartão de crédito</span>
        </div>
      </div>
      <Image
        src="/assets/hero-background.svg"
        alt="hero background"
        width={471}
        height={491}
        className="hidden md:block absolute md:top-0 md:right-0"
      />
    </section>
  );
};

export default HeroSection;
