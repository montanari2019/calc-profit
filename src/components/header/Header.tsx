
import styleHeader from "./Header.module.css"

import logoProd from "../../assets/prod-logo.svg"
import { NavBar } from "./NavBar"

export function Header() {
    return(
        <header className={styleHeader.container}>
            <NavBar/>
            <img src={logoProd} alt="Logo calc proft"/>
        </header>
    )
}