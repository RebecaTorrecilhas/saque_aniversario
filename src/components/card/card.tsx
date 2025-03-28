import styles from "./card.module.css";
import { CardProps } from "./card.type";

export default function Card(props: CardProps) {
    return (
        <div className={`${styles.card} ${styles[props.size]}`}>
            {props.children}
        </div>
    )
}
