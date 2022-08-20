import { ResultItemProps } from "../../model/ResultItem";
import styleResultItem from "./ResultItem.module.css";

export function ResultItem({ id, title, value }: ResultItemProps) {
  
  const valueConverted = value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  
    return (
    <div>
      <div className={styleResultItem.item}>
        <div className={styleResultItem.itemTitle}>
          <strong>{title}</strong>
        </div>

        <div className={styleResultItem.itemValue}>
          <strong>{valueConverted}</strong>
        </div>
      </div>
    </div>
  );
}
