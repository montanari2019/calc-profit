import { useState } from "react";
import { CardProfit } from "../cardProft/CardProfit";
import { InputProfitItem } from "../inputProfitItem/InputProfitItem";
import { ResultButtonItem } from "../resultButtonItem/ResultButtonItem";


export function LiquidacaoSipag() {
  
  const [receitaCoop, setReceitaCoop] = useState<number>(0);
  const [open, setOpen] = useState(false);


  function valueOutput (valueInput: string){
        
    console.log(valueInput)
  }
    return <CardProfit open={open} onOpen={() => {setOpen(true)}} onClose={() => {setOpen(false)}} title="Liquidação Sipag">
        <div>
            <InputProfitItem
              labelName="Teste"
              inputType="Teste"
              placeholderName={"teste"}
              inputValueProps={valueOutput}
            />
          </div>

          <div>
            <ResultButtonItem
              totalizer={receitaCoop}
            />
          </div>
    </CardProfit>
}
