import styleProfit from "./Profit.module.css";

import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { ProfitItemList } from "../../components/profitItem/ProfitItemList";
import { ProfitDetails } from "../../components/profitDetails/ProfitDetails";

export function Profit() {
  return (
    <div className={styleProfit.container}>
      
      <Header />

      <h3>Escolha sua simulação</h3>

      <section>
      <ProfitItemList />
      <ProfitDetails/>
      </section>

    
      <Footer />

    </div>
  );
}
