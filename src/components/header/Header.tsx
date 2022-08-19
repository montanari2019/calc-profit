import { List } from "phosphor-react"
import styleHeader from "./Header.module.css"

import logoProd from "../../assets/prod-logo.svg"

export function Header() {
    return(
        <header className={styleHeader.container}>
            <List color="#323238" size={36}/>
            <img src={logoProd} alt="Logo calc proft"/>
        </header>
    )
}