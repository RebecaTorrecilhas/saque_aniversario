"use client";

import styles from "./page.module.css";
import { useContext } from "react";
import { clearNumber } from "@/utils/utils";
import Header from "@/components/header/header";
import TextFgtsCard from "@/components/text-fgts-card/text-fgts-card";
import Card from "@/components/card/card";
import CashText from "@/components/cash-text/cash-text";
import UserContext from "@/context/UserContext";

export default function Result() {
    const user = useContext(UserContext);

    return (
        <div className={styles.page}>
            <Header />

            <main className="container">
                <TextFgtsCard title={`Olá, ${user.name}!`} />

                <Card size="card-md">
                    <div className={styles.content}>
                        <div className={styles.cashContent}>
                            <CashText title="Você pode receber até"
                                value={user.balance ? clearNumber(user.balance) : 0}>
                            </CashText>
                        </div>
                        <div className={styles.textContent}>
                            <p>
                                <span className={styles.highlight}>
                                    Esta simulação traz valores aproximados.&nbsp;
                                </span>
                                Para calcular o valor exato,&nbsp;
                                <span className={styles.highlight}>
                                    entre em contato com o Smile Co. a consultar seu
                                    saldo no app do FGTS.
                                </span>
                            </p>
                        </div>
                    </div>
                </Card>
            </main>
        </div>
    );
}
