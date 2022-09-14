import { useState } from "react";
import { CardProfit } from "../cardProft/CardProfit";
import { InputProfitItem } from "../inputProfitItem/InputProfitItem";
import { ResultButtonItem } from "../resultButtonItem/ResultButtonItem";


export function SaldoMedioCapatacao() {
  const [open, setOpen] = useState(false);
  const [receitaCoop, setReceitaCoop] = useState<number>(0);
  function valueOutput (valueInput: string){
          
    console.log(valueInput)
  }
      return <CardProfit open={open} onOpen={() => {setOpen(true)}} onClose={() => {setOpen(false)}} title="Saldo Médio Capatação">
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