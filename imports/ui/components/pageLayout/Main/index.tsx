import React from "react";
import "./styles.scss";

const Main = ({
  className,
  ...restProps
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <main className={("main " + (className ?? "")).trim()} {...restProps} />
  );
};

export default Main;
