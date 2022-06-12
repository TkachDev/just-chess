import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss"

interface ILink {
  name: string;
  value: string;
}

const links: ILink[] = [
  { name: "To main", value: "/" },
  { name: "Tasks", value: "/tasks" },
];

const Navigation = () => {
  return (
    <nav className="navigation-bar">
      {links.map(({ name, value }) => (
        <Link key={value} to={value}>{name}</Link>
      ))}
    </nav>
  );
};

export default Navigation;
