"use client";

import styles from './form.module.css';
import UserContext from '@/context/UserContext';
import InputText from '../input-text/input-text';
import InputSelect from '../input-select/input-select';
import Button from '../button/button';
import { formatNumber, formatPhoneInput, monthList } from '@/utils/utils';
import { useActionState, useContext } from 'react';
import { submitForm } from '@/app/actions';
import { FormError } from '@/utils/type';

const initialState: FormError = {
    errorPhone: ""
}

export default function Form() {
    const [state, formAction, pending] = useActionState(submitForm, initialState);

    const user = useContext(UserContext);

    return (
        <form action={formAction} className={styles.formContainer}>
            <div className={styles.inputsContainer}>
                <div className={styles.input}>
                    <InputText
                        id="name"
                        name="name"
                        label="Qual seu nome?"
                        placeholder="ex.: Guilherme Neves"
                        value={user.name}
                        required={true}
                        onChange={
                            (e: React.ChangeEvent<HTMLInputElement>) => user.setName(e.target.value)
                        }
                    />
                </div>

                <div className={styles.input}>
                    <InputText
                        id="phone"
                        name="phone"
                        maxlength={15}
                        label="Qual seu telefone?"
                        placeholder="ex.: (21) 98765-9087"
                        value={user.phone}
                        hasError={!!state.errorPhone}
                        errorText={state.errorPhone}
                        required={true}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            user.setPhone(formatPhoneInput(e.target.value))
                        }
                    />
                </div>

                <div className={styles.input}>
                    <InputText
                        id="balance"
                        name="balance"
                        label="Qual seu saldo?"
                        placeholder="ex.: R$ 5.000,00"
                        value={user.balance}
                        required={true}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            user.setBalance(formatNumber(e.target.value))
                        }
                    />
                </div>

                <div className={styles.input}>
                    <InputSelect
                        id="month"
                        name="month"
                        label="Qual seu mês de aniversário?"
                        value={user.month}
                        optionList={monthList}
                        required={true}
                        onChange={
                            (e: React.ChangeEvent<HTMLSelectElement>) => user.setMonth(e.target.value)
                        }
                    />
                </div>
            </div>

            <Button
                type="submit"
                label="Ver Proposta"
                size="lg"
                color="secondary"
                disabled={pending}
            />
        </form>
    );
}