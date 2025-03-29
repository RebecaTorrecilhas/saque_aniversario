'use client';

import styles from "./input-select.module.css";
import { InputSelectProps } from "./input-select.type";

export default function InputSelect(props: InputSelectProps) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={props.id} className={styles.inputLabel}>
                {props.label}
            </label>
            <select
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                className={styles.inputSelect}
                required={props.required || false}
            >
                {props.optionList?.map((option, index) => (
                    <option value={option.value} key={index}>
                        {option.description}
                    </option>
                ))}
            </select>

            {props.hasError &&
                <div className="error-text">
                    <img src="./images/error.png" alt="" />
                    <p>{props.errorText}</p>
                </div>
            }
        </div>
    )
}
