import styleResultButtonItem from "./ResultButtonItem.module.css"

interface IResultButtonItemProps {
    totalizer:number
}

export function ResultButtonItem( { totalizer }: IResultButtonItemProps){

    const valueConverted = totalizer.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return(
        <div className={styleResultButtonItem.container}>
            <strong>Valor projetado a ser devolvido</strong>
            <div className={styleResultButtonItem.result}>
                <strong>{valueConverted}</strong>
            </div>

            <div className={styleResultButtonItem.buttonDisplay}>
                <button className={styleResultButtonItem.buttonAddResult} type="button">Adicionar Resultado</button>
                <button className={styleResultButtonItem.buttonDeleteResult} type="button">Excluir simulação</button>
            </div>
        </div>
    )
}