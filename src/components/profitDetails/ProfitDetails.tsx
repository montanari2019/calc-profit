import { Printer } from "phosphor-react";
import styleProfitDetails from "./ProfitDetails.module.css";

export function ProfitDetails() {
  return (
    <div className={styleProfitDetails.container}>
      <section className={styleProfitDetails.tableTitle}>
        <strong>Modalidade</strong>
        <strong>Distribuição Líquida</strong>
      </section>

      <div>
        <section className={styleProfitDetails.tableLine}>
          <strong>Saldo Médio Conta Corrente</strong>
          <strong>201,70</strong>
        </section>
        <section className={styleProfitDetails.tableLine}>
          <strong>Saldo Médio Conta Corrente</strong>
          <strong>201,70</strong>
        </section>
        <section className={styleProfitDetails.tableLine}>
          <strong>Saldo Médio Conta Corrente</strong>
          <strong>201,70</strong>
        </section>
        <section className={styleProfitDetails.tableLine}>
          <strong>Saldo Médio Conta Corrente</strong>
          <strong>201,70</strong>
        </section>
        <section className={styleProfitDetails.tableLine}>
          <strong>Saldo Médio Conta Corrente</strong>
          <strong>201,70</strong>
        </section>
        <section className={styleProfitDetails.tableLine}>
          <strong>Saldo Médio Conta Corrente</strong>
          <strong>201,70</strong>
        </section>
        <section className={styleProfitDetails.tableLine}>
          <strong>Saldo Médio Conta Corrente</strong>
          <strong>201,70</strong>
        </section>
        <section className={styleProfitDetails.tableLine}>
          <strong>Saldo Médio Conta Corrente</strong>
          <strong>201,70</strong>
        </section>
        <section className={styleProfitDetails.tableLine}>
          <strong>Saldo Médio Conta Corrente</strong>
          <strong>201,70</strong>
        </section>
      </div>

      <div>
        <section className={styleProfitDetails.cardResult}>
          <strong>Resultado Total</strong>
          <strong>502.352,23</strong>
        </section>

        <section>
          <button className={styleProfitDetails.printOut} type="button">
            {" "}
            <Printer
              className={styleProfitDetails.printOutIcon}
              size={24}
            />{" "}
            Imprimir Resultado
          </button>
        </section>
      </div>
    </div>
  );
}
