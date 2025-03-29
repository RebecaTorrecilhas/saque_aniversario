export type ButtonSize = "sm" | "md" | "lg";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonColor = "primary" | "secondary" | "danger";

export type ButtonProps = {
    label: string,
    size: ButtonSize,
    color: ButtonColor,
    disabled?: boolean,
    type?: ButtonType,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}