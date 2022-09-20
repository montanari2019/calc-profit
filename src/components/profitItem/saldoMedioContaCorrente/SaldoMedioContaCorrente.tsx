import { useState } from "react";
import { CardProfit } from "../cardProft/CardProfit";
import { InputProfitItem } from "../inputProfitItem/InputProfitItem";
import { ResultButtonItem } from "../resultButtonItem/ResultButtonItem";

export function SaldoMedioContaCorrente() {
  const [open, setOpen] = useState(false);
  const [receitaCoop, setReceitaCoop] = useState<number>(0);
  const [resultCalCob, setResultCalCob] = useState<number>(0);

  function valueOutput(valueInput: string) {
    console.log(valueInput);
  }

  function handleClearFieldValue(totalizer: number) {
    setResultCalCob(totalizer);
  }

  return (
    <CardProfit
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      title="Saldo médio da conta corrente"
    >
      {/* <div>
        <InputProfitItem
          labelName={"Ikaro"}
          inputType={"text"}
          placeholderName={"teste"}
          inputValueProps={valueOutput}
        />
        <InputProfitItem
          labelName={"Kaiury"}
          inputType={"password"}
          placeholderName={"teste"}
          inputValueProps={valueOutput}
        />
        <InputProfitItem
          labelName={"Adam"}
          inputType={"email"}
          placeholderName={"teste dois"}
          inputValueProps={valueOutput}
        />
      </div> */}

      <div>
        <ResultButtonItem
          totalizer={resultCalCob}
          handleClearFieldProps={handleClearFieldValue}
        />
      </div>
    </CardProfit>
  );
}
