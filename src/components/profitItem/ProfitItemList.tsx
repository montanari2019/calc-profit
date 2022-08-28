import { CobrancaProfit } from "./cobrancaBancaria/CobrancaProfit"
import styleProfitItemList from "./ProfitItemList.module.css"

export function ProfitItemList(){
    return(
        <div className={styleProfitItemList.container}>
            <CobrancaProfit/>
        </div>
    )
}