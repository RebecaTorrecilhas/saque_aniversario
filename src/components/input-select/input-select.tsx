import styles from "./input-select.module.css";
import sharedStyles from "../../app/shared.module.css";
import { InputSelectProps } from "./input-select.type";
import Image from "next/image";

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
                <div className={sharedStyles['error-text']}>
                    <Image src="/images/error.png" width={24} height={24} alt="" />
                    <p>{props.errorText}</p>
                </div>
            }
        </div>
    )
}
