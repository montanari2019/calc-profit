import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import styleAbout from "./About.module.css";

export function About() {
    return(
        <div className={styleAbout.container}>
            <Header/>
            <h1>About</h1>
            <Footer/>
        </div>
    )
    
}