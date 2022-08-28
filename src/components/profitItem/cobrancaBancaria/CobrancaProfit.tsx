import { Plus } from "phosphor-react";
import { useState } from "react";
import { InputProfitItem } from "../inputProfitItem/InputProfitItem";
import styleCobrancaProfit from "./CobrancaProfit.module.css";

export function CobrancaProfit() {
  const [cardOpen, setCardOpen] = useState<Boolean>(false);

  return (
   
    <div>
      <div className={styleCobrancaProfit.cardBody}>
        <section className={styleCobrancaProfit.cardOpen}>
          <section className={styleCobrancaProfit.ajustButtonCard}>
            <div className={styleCobrancaProfit.iconOpen}>
              <Plus color="#E1E1E6" size={27}  className={styleCobrancaProfit.iconPlusOpen}/>
            </div>

            <strong className={styleCobrancaProfit.strong}>
              Cobrança Bancária
            </strong>
          </section>
        </section>

        <InputProfitItem labelName={"Ikaro"} inputType={"text"} placeholderName={"teste"}/>
        <InputProfitItem labelName={"Kaiury"} inputType={"password"} placeholderName={"teste"}/>
        <InputProfitItem labelName={"Adam"} inputType={"email"} placeholderName={"teste"}/>
        

        
      </div>

    
    </div>
  );
}
