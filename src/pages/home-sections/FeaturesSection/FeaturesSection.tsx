import * as React from "react";
import { Frame } from "./components/frame";
import Image from "next/image";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const styleStrongContent = "text-white text-heading-sm md:text-heading-lg font-heading";
  return (
    <section className="grid gap-[12px] md:grid-cols-2  w-full max-w-40 md:max-w-none">
      <Frame.Root className="flex flex-col gap-[16px]">
        <Frame.Tag>simples</Frame.Tag>
        <Frame.Content as="strong" className={styleStrongContent}>
          Crie um catálogo de produtos online em poucos minutos
        </Frame.Content>
      </Frame.Root>
      <Frame.Root className="flex flex-col gap-[16px]">
        <Frame.Tag>prático</Frame.Tag>
        <Frame.Content as="strong" className={styleStrongContent}>
          Venda para seu público através de uma plataforma única
        </Frame.Content>
      </Frame.Root>

      <Frame.Root className="md:col-span-2 flex justify-between">
        <Frame.Content as="div" className="flex flex-col gap-[16px] md:max-w-1/2">
          <Frame.Tag>personalizável</Frame.Tag>
          <Frame.Content as="div" className="flex flex-col justify-between grow">
            <Frame.Content as="strong" className={styleStrongContent}>
              Tenha uma loja online personalizada com a cara da sua marca
            </Frame.Content>

            <Image
              src="/assets/frame-bg-mobile.svg"
              alt="imagem de fundo do quadro de características"
              width={310}
              height={230}
              className="md:hidden w-full"
            />
            <Button variant="primary" size="lg" className="flex gap-[8px] justify-center md:w-fit md:mt-auto">
              Criar Loja Grátis
              <ArrowRight size={24} />
            </Button>
          </Frame.Content>
        </Frame.Content>
        <Image
          src="/assets/image.png"
          alt="imagem de fundo do quadro de características"
          width={440}
          height={327}
          className="hidden md:block w-full min-w-40"
        />
      </Frame.Root>
    </section>
  );
};

export default FeaturesSection;
