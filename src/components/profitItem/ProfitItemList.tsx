import styleProfitItemList from "./ProfitItemList.module.css"
import { CobrancaBancaria } from "./cobrancaBancaria/CobrancaBancaria"
import { DevolucaoAnuiadadeCartao } from "./devolucaoAnuiadadeCartao/DevolucaoAnuiadadeCartao"
import { JurosPagos } from "./jurosPagos/JurosPagos"
import { LiquidacaoSipag } from "./liquidacaoSipag/LiquidacaoSipag"
import { Rdc721 } from "./Rdc721/Rdc721"
import { ResultadoSipag } from "./resultadoSipag/ResultadoSipag"
import { SaldoMedioCapatacao } from "./saldoMedioCapatacao/SaldoMedioCapatacao"
import { SaldoMedioContaCorrente } from "./saldoMedioContaCorrente/SaldoMedioContaCorrente"
import { ProfitDetails } from "../profitDetails/ProfitDetails"

export function ProfitItemList(){
    return(
        <div className={styleProfitItemList.container}>
            <div className={styleProfitItemList.display}>
            <SaldoMedioContaCorrente/>
            <Rdc721/>
            <CobrancaBancaria/>
            <SaldoMedioCapatacao/>
            <DevolucaoAnuiadadeCartao/>
            <LiquidacaoSipag/>
            <JurosPagos/>
            <ResultadoSipag/>
            </div>
            
            <section className={styleProfitItemList.sectionOne}>
                
            </section>
        </div>
    )
}