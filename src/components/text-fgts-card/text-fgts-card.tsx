import styles from "./text-fgts-card.module.css";
import { TextCardProps } from "./text-fgts-card.type";

export default function TextFgtsCard(props: TextCardProps) {
    return (
        <section className={styles.cardTextContainer}>
            <div className={styles.titleContainer}>
                <h1>{props.title}</h1>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.subtitle}>
                    <img src="./money.svg" alt="" className={styles.svg} />
                    <h2> SAQUE ANIVERSÁRIO </h2>
                </div>
                <div className={styles.text}>
                    <div />
                    <p className={styles.pt10px}>
                        <b>Insira seus dados</b> e verifique o quanto você
                        poderá receber!
                    </p>
                </div>
            </div>
        </section>
    )
}