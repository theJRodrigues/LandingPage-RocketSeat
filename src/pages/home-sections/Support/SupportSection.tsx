import * as React from "react";
import { HeartHandshake, Paintbrush, Store } from "lucide-react";
import { SupportCard } from "./components/card";
import Title from "@/components/Title";

const SupportSection = () => {
  return (
    <section className="py-4.5 md:py-12 flex flex-col gap-3 md:gap-5 items-center md:bg-[url(/assets/support-bg.svg)] bg-contain bg-center bg-no-repeat bg-blend-difference">
      <Title
        as="h2"
        size="md"
        className="md:text-heading-xl text-white m-auto text-center max-w-40 md:max-w-49"
      >
        Sua loja de afiliados, simples, do jeito que deveria ser
      </Title>
      <div className="flex flex-col gap-1.5 md:gap-2.5 items-center md:flex-row gap-">
        <SupportCard.root className="space-y-1.5">
          <SupportCard.icon Icon={Paintbrush} />
          <div className="space-y-[8px]">
            <SupportCard.title as="h3" size="sm" className="text-white">
              Personalize seu site
            </SupportCard.title>
            <SupportCard.content>
              Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.
            </SupportCard.content>
          </div>
        </SupportCard.root>

        <SupportCard.root className="space-y-1.5" color="cyan">
          <SupportCard.icon Icon={Store} color="cyan" />
          <div className="space-y-[8px]">
            <SupportCard.title as="h3" size="sm" className="text-white">
              Venda de qualquer loja
            </SupportCard.title>
            <SupportCard.content>
              Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado.
            </SupportCard.content>
          </div>
        </SupportCard.root>

        <SupportCard.root className="space-y-1.5">
          <SupportCard.icon Icon={HeartHandshake} />
          <div className="space-y-[8px]">
            <SupportCard.title as="h3" size="sm" className="text-white">
              Receba suporte amigável
            </SupportCard.title>
            <SupportCard.content>
              Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.
            </SupportCard.content>
          </div>
        </SupportCard.root>
      </div>
    </section>
  );
};

export default SupportSection;
