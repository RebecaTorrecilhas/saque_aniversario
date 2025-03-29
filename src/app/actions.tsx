"use server";

import { Const } from "@/utils/const";
import { FormError, PhoneValidationResponse } from "@/utils/type";
import { redirect } from "next/navigation";

export async function submitForm(_prevState: FormError, formData: FormData) {
    const phone = formData.get('phone')?.toString()?.replace(/\D/g, "");

    const res = await fetch(
        `${Const.phone_validation_url}?api_key=${Const.phone_validation_api_key}&phone=55${phone}`, {
        method: 'GET'
    });

    const json: PhoneValidationResponse = await res.json();

    if (!res.ok || !json.valid) {
        return { errorPhone: 'Telefone inválido' }
    }

    redirect("/resultado");
}