import { CobrancaProfit } from "../cobrancaBancaria/CobrancaProfit";
import { InputProfitItem } from "../inputProfitItem/InputProfitItem";
import { ResultButtonItem } from "../resultButtonItem/ResultButtonItem";

export function Rdc721() {
    return <CobrancaProfit open={false} onOpen={() => {}} onClose={() => {}} title="RDC 721">
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
    </CobrancaProfit>
}
