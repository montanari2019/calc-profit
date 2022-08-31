import { ArrowLineDown, ArrowLineUp } from "phosphor-react";
import { ReactNode } from "react";
import styleCobrancaProfit from "./CobrancaProfit.module.css";

interface ICobrancaProfitProps {
  children: ReactNode | null;
  title: string;
  onOpen: () => void;
  onClose: () => void;
  open: boolean;
}

export function CobrancaProfit({
  children,
  title,
  open,
  onOpen,
  onClose,
}: ICobrancaProfitProps) {
  // const [cardOpen, setCardOpen] = useState<Boolean>(false);

  return (
    <div>
      <div className={styleCobrancaProfit.cardBody}>
        <section className={open ? styleCobrancaProfit.cardOpen: styleCobrancaProfit.cardClose}>
          <section className={styleCobrancaProfit.ajustButtonCard}>
            <div onClick={open ? onClose : onOpen} className={open ? styleCobrancaProfit.iconOpen : styleCobrancaProfit.iconClose}>
              {open ? (
                <ArrowLineUp
                  color="#E1E1E6"
                  size={27}
                  className={styleCobrancaProfit.iconPlusOpen}
                />
              ) : (
                <ArrowLineDown
                  color="#E1E1E6"
                  size={27}
                  className={styleCobrancaProfit.iconPlusOpen}
                />
              )}
            </div>

            <strong className={styleCobrancaProfit.strong}>{title}</strong>
          </section>
        </section>

        <section className={open ? styleCobrancaProfit.sectionDisplay : styleCobrancaProfit.sectionDisplayClosed}>
          {children}
        </section>
      </div>
    </div>
  );
}
