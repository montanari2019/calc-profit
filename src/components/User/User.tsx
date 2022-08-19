import styleUser from "./User.module.css"

export function User(){
    const imgUrl = "https://scontent.fpvh3-1.fna.fbcdn.net/v/t39.30808-6/272993807_4564462526996500_4012459014775586792_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=qxBArvWjraIAX-OeMNW&tn=HqILZZ571AiT5Qxb&_nc_ht=scontent.fpvh3-1.fna&oh=00_AT_QNvWw0SKeW5ZaCSSU2VZ6ekFVKktQ7FCmSJ2N_bkRjw&oe=63045C90"
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