'use client';

import styles from "./input-text.module.css";
import sharedStyles from "../../app/shared.module.css";
import Image from "next/image";
import { InputTextProps } from "./input-text.type";

export default function InputText(props: InputTextProps) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={props.id} className={styles.inputLabel}>
                {props.label}
            </label>
            <input
                id={props.id}
                name={props.name}
                type="text"
                maxLength={props.maxlength}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className={styles.inputText}
                required={props.required || false}
            />

            {props.hasError &&
                <div className={sharedStyles['error-text']}>
                    <Image src="/images/error.png" width={24} height={24} alt="" />
                    <p>{props.errorText}</p>
                </div>
            }
        </div>
    )
}
