import styleResult from "./Result.module.css";
import { ResultItem } from "./ResultItem";

export function Result() {
  return (
    <div>
      <section className={styleResult.container}>
        <div className={styleResult.strong01}>
          <strong>Apuração de Resultado em 2021</strong>
        </div>


        <section>
          <div className={styleResult.sobras}>
            <strong>Sobras em 2021</strong>
            <strong>160.748.377,09</strong>
          </div>

          <ResultItem/>
          
        </section>
      </section>
    </div>
  );
}
