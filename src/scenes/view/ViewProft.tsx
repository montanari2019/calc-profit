import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import styleViewProfit from "./ViewProfit.module.css"

export function ViewProfit(){
    return (
        <div className={styleViewProfit.container}>
            <Header/>
            <h1>View Profit</h1>
            <Footer/>
        </div>
    )
}