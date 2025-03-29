import styles from "./cash-text.module.css";
import { calcFGTS, formattCurrencyValue, splitCurrencyValue } from "@/utils/utils";
import { CashTextProps } from "./cashtext.type";

export default function CashText(props: CashTextProps) {
    const valuesSplit = splitCurrencyValue(
        formattCurrencyValue(
            calcFGTS(props.value)
        )
    );

    return (
        <div className={styles.cashTextContainer}>
            <b className={styles.titleText}> {props.title} </b>
            <p>
                <span className={styles.realText}>
                    R$&nbsp;
                </span>
                <b className={styles.valueText}>
                    {valuesSplit[0]},
                    <span className={styles.centText}>
                        {valuesSplit[1]}
                    </span>
                </b>
            </p>
        </div>
    )
}
