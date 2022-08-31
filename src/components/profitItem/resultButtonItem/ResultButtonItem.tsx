import styleResultButtonItem from "./ResultButtonItem.module.css"

interface IResultButtonItemProps {
    total:number
}

export function ResultButtonItem(){
    return(
        <div className={styleResultButtonItem.container}>
            <strong>Valor projetado a ser devolvido</strong>
            <div className={styleResultButtonItem.result}>
                <strong>182.658,30</strong>
            </div>

            <div className={styleResultButtonItem.buttonDisplay}>
                <button className={styleResultButtonItem.buttonAddResult} type="button">Adicionar Resultado</button>
                <button className={styleResultButtonItem.buttonDeleteResult} type="button">Excluir simulação</button>
            </div>
        </div>
    )
}