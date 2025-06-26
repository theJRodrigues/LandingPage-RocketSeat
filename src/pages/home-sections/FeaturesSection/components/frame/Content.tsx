import * as React from "react";

type FrameContentProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const FrameContent = <T extends React.ElementType = "div">({
  as,
  children,
  className,
  ...props
}: FrameContentProps<T>) => {
  const Tag = as || "div";
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
};

export default FrameContent;
