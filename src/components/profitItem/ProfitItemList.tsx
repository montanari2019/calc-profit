import styleProfitItemList from "./ProfitItemList.module.css"
import { Rdc721 } from "./Rdc721/Rdc721"
import { SaldoMedioContaCorrente } from "./saldoMedioContaCorrente/SaldoMedioContaCorrente"

export function ProfitItemList(){
    return(
        <div className={styleProfitItemList.container}>
            <SaldoMedioContaCorrente/>
            <Rdc721/>
            <Rdc721/>
            <Rdc721/>
            <Rdc721/>
            <Rdc721/>
            <Rdc721/>
            <Rdc721/>
        </div>
    )
}