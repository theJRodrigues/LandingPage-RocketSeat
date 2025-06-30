import Image from "next/image";
import * as React from "react";

interface CardReviewProps {
  content: string;
  avatarPath: string;
  name: string;
  role: string;
}

const CardReview = ({ content, avatarPath, name, role }: CardReviewProps) => {
  return (
    <article className="p-4 bg-gray-600 rounded-xl grid gap-4 w-full max-w-47 border border-gray-400">
      <p className="text-gray-200 font-body italic text-body-md">{content}</p>
      <div className="flex gap-[12px]">
        <Image src={avatarPath} height={36} width={36} alt="Customer Avatar" />

        <div className="font-body flex flex-col gap-[4px]">
          <strong className="font-medium text-body-sm text-gray-200">{name}</strong>
          <span className="text-body-xs text-gray-300">{role}</span>
        </div>
      </div>
    </article>
  );
};

export default CardReview;
