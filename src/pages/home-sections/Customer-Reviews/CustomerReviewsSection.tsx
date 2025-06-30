import Title from "@/components/Title";
import * as React from "react";
import CardReview from "./card/Card";

const reviews = [
  {
    content:
      "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A",
    avatarPath: "/assets/anette-avatar.svg",
    name: "Annette Bones",
    role: "CEO na Anne Corp",
  },
  {
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    avatarPath: "/assets/jacob-avatar.svg",
    name: "Jacob Jones",
    role: "CEO na JJ Org",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-8 md:pt-13 md:pb-17 space-y-4.5">
      <Title as="h2" size="md" className="md:text-heading-xl text-white text-center">
        Quem utiliza, aprova!
      </Title>

      <div className="grid gap-1.5 md:gap-2.5 md:grid-flow-col md:justify-center">
        {reviews.map((review, index) => {
          return (
            <CardReview
              key={index}
              content={review.content}
              avatarPath={review.avatarPath}
              name={review.name}
              role={review.role}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
