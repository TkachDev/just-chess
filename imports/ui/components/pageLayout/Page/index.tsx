import React from "react";
import "./styles.scss";

const Page = ({
  className,
  ...restProps
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return <div className={("app " + (className ?? "")).trim()} {...restProps} />;
};

export default Page;
