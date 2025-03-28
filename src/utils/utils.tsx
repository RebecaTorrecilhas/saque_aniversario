export function formattCurrencyValue(value: number): string {
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
}

export function splitCurrencyValue(value: string): string[] {
    return value.split(",");
}