import { ChangeEventHandler } from "react";

export type InputTextProps = {
    id: string,
    name: string,
    label: string,
    placeholder: string,
    required?: boolean,
    errorText?: string,
    value: string,
    hasError?: boolean,
    maxlength?: number,
    onChange: ChangeEventHandler<HTMLInputElement>,
    onBlur?: ChangeEventHandler<HTMLInputElement>
}