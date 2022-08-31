import { useState } from "react";
import { CobrancaProfit } from "../cobrancaBancaria/CobrancaProfit";
import { InputProfitItem } from "../inputProfitItem/InputProfitItem";
import { ResultButtonItem } from "../resultButtonItem/ResultButtonItem";

export function SaldoMedioContaCorrente() {
    const [open, setOpen] = useState(false);
    return <CobrancaProfit open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} title="Saldo médio da conta corrente">
        <div>
            <InputProfitItem
              labelName={"Ikaro"}
              inputType={"text"}
              placeholderName={"teste"}
            />
            <InputProfitItem
              labelName={"Kaiury"}
              inputType={"password"}
              placeholderName={"teste"}
            />
            <InputProfitItem
              labelName={"Adam"}
              inputType={"email"}
              placeholderName={"teste dois"}
            />
          </div>

          <div>
            <ResultButtonItem />
          </div>
    </CobrancaProfit>
}
