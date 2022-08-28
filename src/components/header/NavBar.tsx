import { List, X } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styleNavBar from "./NavBar.module.css";

const linksNavigation = [
  {
    nameLink: "Home",
    url: "/",
  },
  {
    nameLink: "Calcular Sobras",
    url: "/profit",
  },
  {
    nameLink: "Vizualiar Sobras",
    url: "/viewProfit",
  },
  {
    nameLink: "Sobre",
    url: "/about",
  },
];

export function NavBar() {
  const [menuCheck, setMenuCheck] = useState<Boolean>(false);

  function handleMenuClick() {
    if (menuCheck === true) {
      setMenuCheck(false);
      console.log("Menu fechado");
    } else if (menuCheck === false) {
      setMenuCheck(true);
      console.log("Menu aberto");
    }
  }

  return (
    <div>
        <section className={styleNavBar.navDesktop}>
            {linksNavigation.map((linksNav) =>{
                return(
                    <Link className={styleNavBar.linkNavigation} key={linksNav.nameLink} to={linksNav.url}>{linksNav.nameLink}</Link>
                )
            })}
        </section>

        {/* Menu nav bar */}
      <section className={styleNavBar.navBar}>
        <List
          className={styleNavBar.icon}
          onClick={handleMenuClick}
          color="#323238"
          size={36}
        />

        <section className={menuCheck === true ? styleNavBar.menuOpen : styleNavBar.menuClose}>
          <X
            className={styleNavBar.iconClose}
            onClick={handleMenuClick}
            color="#E1E1E6"
            size={36}
          />

          <div className={styleNavBar.menuItem}>
            {linksNavigation.map((links) => (
              <Link
                key={links.nameLink}
                className={styleNavBar.linkNavigation}
                to={links.url}
              >
                {links.nameLink}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
