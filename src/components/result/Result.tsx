import styleResult from "./Result.module.css";
import { ResultItem } from "./ResultItem";

const resultItemList = [
  {
    id: 1,
    title: "Juros ao Capital Social 31/12/2021",
    value: 9286942.86,
  },
  {
    id: 2,
    title: "Fundo Reserva (10%) - Destinação Legal",
    value: 14371668.72,
  },
  {
    id: 3,
    title: "FATES (5,0%) - Destinação Legal",
    value: 7185834.36,
  },
  {
    id: 4,
    title: "FATES - Atos com não associados",
    value: 4250988.68,
  },
  {
    id: 5,
    title: "FEF - (5,0%)",
    value: 7185834.36,
  },
  {
    id: 6,
    title: "Adicional Fundo Reserva",
    value: 43145253.96,
  },
  {
    id: 7,
    title: "Ação Social (Hospital Cooperar)",
    value: 10000000.00,
  },
];


export function Result() {
  return (
    <div>
      <section className={styleResult.container}>
        <div className={styleResult.strong01}>
          <strong>Apuração de Resultado em 2021</strong>
        </div>


        <section className={styleResult.displayCards}>
          <div className={styleResult.sobras}>
            <p>Resultado em 2021</p>
            <strong>160.748.377,09</strong>
          </div>

          <section className={styleResult.containerReultItemList}>
            {resultItemList.map((resultItem) => {
              return(
              <ResultItem 
                key={resultItem.id}
                id={resultItem.id}
                title={resultItem.title}
                value={resultItem.value}
              
              />
              )
            })}
          
          </section>

          <section >
            <div className={styleResult.footer}>
              <p>Sobras a serem distribuídas para associados : </p>
              <strong>65.321.854,15</strong>
            </div>
          </section>
          
        </section>
      </section>
    </div>
  );
}
