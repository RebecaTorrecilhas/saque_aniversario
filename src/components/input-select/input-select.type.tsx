import { ChangeEventHandler } from "react";

export type InputSelectProps = {
    id: string,
    name: string,
    label: string,
    required?: boolean,
    errorText?: string,
    value: string,
    hasError?: boolean,
    optionList: SelectOption[],
    onChange: ChangeEventHandler<HTMLSelectElement>,
    onBlur?: ChangeEventHandler<HTMLSelectElement>
}

export type SelectOption = {
    description: string,
    value: string | readonly string[] | number | undefined
}