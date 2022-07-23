import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import {
  MAIN_PAGE_URL,
  TASKS_PAGE_URL,
} from "/imports/helpers/constants/links";

interface ILink {
  name: string;
  value: string;
}

const links: ILink[] = [
  { name: "To main", value: MAIN_PAGE_URL },
  { name: "Tasks", value: TASKS_PAGE_URL },
];

const Navigation = () => {
  return (
    <div className="app-bar">
      <div className="app-header">
        <nav className="navigation-bar">
          {links.map(({ name, value }) => (
            <Link key={value} to={value}>
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
