'use client';

import styles from "./input-text.module.css";
import { InputTextProps } from "./input-text.type";

export default function InputText(props: InputTextProps) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={props.id} className={styles.inputLabel}>
                {props.label}
            </label>
            <input
                id={props.id}
                type="text"
                maxLength={props.maxlength}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className={styles.inputText}
                required={props.required || false}
            />

            {props.hasError &&
                <div className="error-text">
                    <img src="./images/error.png" alt="" />
                    <p>{props.errorText}</p>
                </div>
            }
        </div>
    )
}
