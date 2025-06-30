import * as React from "react";
import { Card } from "./components/card";
import Image from "next/image";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const styleStrongContent = "text-white text-heading-sm md:text-heading-lg font-heading";
  return (
    <section className="grid gap-[12px] md:grid-cols-2  w-full max-w-40 md:max-w-none m-auto pt-4 pb-7 md:pt-8 md:pb-12">
      <Card.Root className="flex flex-col gap-[16px]">
        <Card.Tag>simples</Card.Tag>
        <Card.Content as="strong" className={styleStrongContent}>
          Crie um catálogo de produtos online em poucos minutos
        </Card.Content>
      </Card.Root>
      <Card.Root className="flex flex-col gap-[16px]">
        <Card.Tag>prático</Card.Tag>
        <Card.Content as="strong" className={styleStrongContent}>
          Venda para seu público através de uma plataforma única
        </Card.Content>
      </Card.Root>

      <Card.Root className="md:col-span-2 flex justify-between">
        <Card.Content as="div" className="flex flex-col gap-[16px] md:max-w-1/2">
          <Card.Tag>personalizável</Card.Tag>
          <Card.Content as="div" className="flex flex-col justify-between grow gap-3">
            <Card.Content as="strong" className={styleStrongContent}>
              Tenha uma loja online personalizada com a cara da sua marca
            </Card.Content>

            <Image
              src="/assets/image(1).png"
              alt="imagem de fundo do quadro de características"
              width={310}
              height={230}
              layout="responsive"
              className="md:hidden"
            />
            <Button variant="primary" size="lg" className="flex gap-[8px] justify-center md:w-fit md:mt-auto">
              Criar Loja Grátis
              <ArrowRight size={24} />
            </Button>
          </Card.Content>
        </Card.Content>
        <Image
          src="/assets/image(1).png"
          alt="imagem de fundo do quadro de características"
          width={440}
          height={327}
          layout="responsive"
          className="hidden md:block"
        />
      </Card.Root>
    </section>
  );
};

export default FeaturesSection;
