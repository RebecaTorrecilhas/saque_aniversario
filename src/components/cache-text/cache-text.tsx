import { formattCurrencyValue, splitCurrencyValue } from "@/utils/utils";
import styles from "./cache-text.module.css";
import { CacheTextProps } from "./cache-text.type";

export default function CacheText(props: CacheTextProps) {
    const valuesSplit = splitCurrencyValue(
        formattCurrencyValue(props.value)
    );

    return (
        <div className={styles.cacheTextContainer}>
            <b className={styles.titleText}> {props.title} </b>
            <p>
                <span className={styles.realText}>
                    R$
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
