import React from "react";
import "./styles.scss";

const Header = ({
  className,
  ...restProps
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <header className={("header " + (className ?? "")).trim()} {...restProps} />
  );
};

export default Header;
