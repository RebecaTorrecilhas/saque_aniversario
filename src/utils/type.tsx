export type User = {
    name: string,
    balance: string,
    phone: string,
    month: string,
    setName: (name: string) => void,
    setBalance: (balance: string) => void,
    setPhone: (phone: string) => void,
    setMonth: (month: string) => void,
}

export type PhoneValidationResponse = {
    phone: string,
    valid: boolean,
    format: {
        international: string,
        local: string
    },
    country: {
        code: string,
        name: string,
        prefix: string
    },
    location: string,
    type: string,
    carrie: string
}

export type FormError = {
    errorPhone: string
}