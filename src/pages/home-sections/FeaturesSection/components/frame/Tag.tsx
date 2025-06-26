import clsx from "clsx";
import * as React from "react";
interface TagProps extends React.ComponentProps<"span"> {
  children: string;
}
const FrameTag = ({ children, className }: TagProps) => {
  return (
    <span
      className={clsx(
        "font-body text-body-tag py-[6px] px-[12px] text-blue-200 bg-blue-400 w-fit rounded-sm",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default FrameTag;
