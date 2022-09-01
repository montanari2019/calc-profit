import { useState } from "react";
import { CardProfit } from "../cardProft/CardProfit";
import { InputProfitItem } from "../inputProfitItem/InputProfitItem";
import { ResultButtonItem } from "../resultButtonItem/ResultButtonItem";

export function CobrancaBancaria(){
    const [open, setOpen] = useState(false);
    return<CardProfit open={open} onOpen={() => {setOpen(true)}} onClose={() => {setOpen(false)}} title="Cobrança Bancária">
            <div>
                <InputProfitItem
                labelName="Cobrança"
                inputType="text"
                placeholderName="Cobrança"
                />
            </div>

            <div>
                <ResultButtonItem/>
            </div>
    </CardProfit>
}