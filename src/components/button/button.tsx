import styles from './button.module.css';
import { ButtonProps } from "./button.type";

export default function Button(props: ButtonProps) {
    return (
        <button
            className={`${styles.btn} ${props.size ? styles[props.size] : styles.lg} 
            ${props.color ? styles[props.color] : styles.primary}`}
            type={props.type || "button"}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}