import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Result } from "../../components/result/Result";
import { User } from "../../components/User/User";
import styleHome from "./Home.module.css";


export function Home() {
  return (
    <div>
      <Header />

      <section className={styleHome.container}>
        <User />

        <div className={styleHome.welcomeText}>
          <strong>Welcome to Calc Profit</strong>
        </div>
      </section>

      <section>
        <Result />
      </section>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
