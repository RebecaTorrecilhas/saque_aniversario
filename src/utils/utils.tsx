import { SelectOption } from "@/components/input-select/input-select.type";

export function formattCurrencyValue(value: number): string {
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
}

export function splitCurrencyValue(value: string): string[] {
    return value.split(",");
}

export const monthList: SelectOption[] = [
    {
        description: "Janeiro",
        value: 1
    },
    {
        description: "Fevereiro",
        value: 2
    },
    {
        description: "Março",
        value: 3
    },
    {
        description: "Abril",
        value: 4
    },
    {
        description: "Maio",
        value: 5
    },
    {
        description: "Junho",
        value: 6
    },
    {
        description: "Julho",
        value: 7
    },
    {
        description: "Agosto",
        value: 8
    },
    {
        description: "Setembro",
        value: 9
    },
    {
        description: "Outubro",
        value: 10
    },
    {
        description: "Novembro",
        value: 11
    },
    {
        description: "Dezembro",
        value: 12
    },
];

export const formatPhoneInput = (value: string): string => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{0})(\d)/, "$1($2");
    value = value.replace(/(\d{2})(\d)/, "$1) $2");
    value = value.replace(/(\d{1})(\d{1,4})$/, "$1-$2");

    return value;
};

export const formatNumber = (value: string): string => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d+)(\d{2})$/, "$1,$2");
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    return "R$ " + value;
};

export const clearNumber = (value: string): number => {
    value = value.replace("R$", "");
    value = value.replace(".", "");
    value = value.replace(",", ".");
    value = value.trim();

    return parseFloat(value);
};

/**
 * Essa função recebe um valor numérico e retorna como resultado
 * o cálculo do valor disponível para saque do FGTS com base nas regras.
 * @param value valor numérico referente ao saldo
 * @returns valor numérico refrente ao valor disponível para saque
 **/

export function calcFGTS(value: number): number {
    if (value <= 500) {
        return value * 0.5;
    }

    if (value <= 1000) {
        return value * 0.4 + 50;
    }

    if (value <= 5000) {
        return value * 0.3 + 150;
    }

    if (value <= 10000) {
        return value * 0.2 + 650;
    }

    if (value <= 15000) {
        return value * 0.15 + 1150;
    }

    if (value <= 20000) {
        return value * 0.1 + 1900;
    }

    return value * 0.05 + 2900;
}