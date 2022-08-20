import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import styleFooter from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styleFooter.container}>
      <section className={styleFooter.icons}>
        <div>
          <a
            className={styleFooter.aLogos}
            href="https://www.linkedin.com/company/sicoobcredisul/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={44} />
          </a>
        </div>

        <div>
          <a
            className={styleFooter.aLogos}
            href="https://www.instagram.com/sicoob_credisul/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo size={44} />
          </a>
        </div>

        <div>
          <a
            className={styleFooter.aLogos}
            href="https://www.facebook.com/oficialsicoobcredisul"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookLogo size={44} />
          </a>
        </div>
      </section>

      <strong>
        Criado e desenvolvido por{" "}
        <a
          className={styleFooter.aStrong}
          href="https://www.linkedin.com/in/ikaro-montanari-5aa120208/"
          target="_blank"
          rel="noreferrer"
        >
          Ikaro Montanari
        </a>
      </strong>
    </div>
  );
}
