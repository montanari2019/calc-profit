import styleUser from "./User.module.css"

export function User(){
    const imgUrl = "https://github.com/montanari2019.png"
    return (
        <div className={styleUser.container}>
            <img src={imgUrl} alt="foto user" />

           <section className={styleUser.name}>
                <strong>Adam Boitaloco</strong>
                <p>adam.boitaloco@sicoobcredisul.com.br</p>
            </section>        
        </div>
    )
}