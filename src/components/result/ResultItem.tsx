import styleResultItem from "./ResultItem.module.css";

export function ResultItem() {
  return (
    <div>
      <div className={styleResultItem.item}>
        <div className={styleResultItem.itemTitle}>
          <strong>Juros ao Capital Social 31/12/2021</strong>
        </div>

        <div className={styleResultItem.itemValue}>
          <strong>9.286.942,86</strong>
        </div>
      </div>
    </div>
  );
}
