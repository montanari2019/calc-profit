import { useState } from "react";
import { CardProfit } from "../cardProft/CardProfit";
import { InputProfitItem } from "../inputProfitItem/InputProfitItem";
import { ResultButtonItem } from "../resultButtonItem/ResultButtonItem";

export function DevolucaoAnuiadadeCartao() {
  const [open, setOpen] = useState(false);
    return <CardProfit open={open} onOpen={() => {setOpen(true)}} onClose={() => {setOpen(false)}} title="Devolução Anuiadade Cartão">
        <div>
            <InputProfitItem
              labelName="Teste"
              inputType="Teste"
              placeholderName={"teste"}
            />
          </div>

          <div>
            <ResultButtonItem />
          </div>
    </CardProfit>
}