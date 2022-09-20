import styleResultButtonItem from "./ResultButtonItem.module.css"

interface IResultButtonItemProps {
    totalizer:number;
    handleClearFieldProps: (totalizer: number) => void;
}

export function ResultButtonItem( { totalizer, handleClearFieldProps }: IResultButtonItemProps){

    const valueConverted = totalizer.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    function handleClearField(){
        console.log("entrando na função de limpar o campo")
        totalizer = 0;
        handleClearFieldProps(totalizer);
    }

    return(
        <div className={styleResultButtonItem.container}>
            <strong>Valor projetado a ser devolvido</strong>
            <div className={styleResultButtonItem.result}>
                <strong>{valueConverted}</strong>
            </div>

            <div className={styleResultButtonItem.buttonDisplay}>
                <button className={styleResultButtonItem.buttonAddResult} type="button">Calcular Resultado</button>
                <button onClick={handleClearField} className={styleResultButtonItem.buttonLimparResult} type="button">Limpar Campo</button>
            </div>
        </div>
    )
}