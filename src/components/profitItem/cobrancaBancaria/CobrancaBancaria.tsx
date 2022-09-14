import { useState, FormEvent, } from "react";
import { CardProfit } from "../cardProft/CardProfit";
import { InputProfitItem } from "../inputProfitItem/InputProfitItem";
import { ResultButtonItem } from "../resultButtonItem/ResultButtonItem";


export function CobrancaBancaria(){
    const [open, setOpen] = useState(false);
    const [receitaCoop, setReceitaCoop] = useState<number>(0);
    const [receitaBruta, setReceitaBruta] = useState<number>(5000000.00);
    const [sobrasDistribuidasCoob, setSobrasDistribuidasCoob] = useState<number>(2000000.00);
    const [resultCalCob, setResultCalCob] = useState<number>(0);

    function valueOutput (valueInput: string){
        setReceitaCoop(parseFloat(valueInput));
        console.log(receitaCoop)
    }

    function calcReceitaCoop(event: FormEvent ){
        event.preventDefault();
        console.log("chamando função")
         setResultCalCob((receitaCoop*sobrasDistribuidasCoob)/receitaBruta);
         console.log(resultCalCob)
         
    }

    return<CardProfit open={open} onOpen={() => {setOpen(true)}} onClose={() => {setOpen(false)}} title="Cobrança Bancária">
            <form onSubmit={calcReceitaCoop}>
                <InputProfitItem
                labelName="Receita do Cooperado"
                inputType="text"
                placeholderName="Cobrança" 
                inputValueProps={valueOutput}
                
                />
            </form>

            <div>
                <ResultButtonItem
                    totalizer={resultCalCob}
                />
            </div>
    </CardProfit>
}