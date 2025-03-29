import styles from "./text-fgts-card.module.css";
import { TextCardProps } from "./text-fgts-card.type";
import Image from "next/image";

export default function TextFgtsCard(props: TextCardProps) {
    return (
        <section className={styles.cardTextContainer}>
            <div className={styles.titleContainer}>
                <h1>{props.title}</h1>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.subtitle}>
                    <Image src="./money.svg" width={30} height={30} alt="" className={styles.svg} />
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