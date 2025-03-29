"use client";

import UserContext, { initialUserState } from "@/context/UserContext";
import { User } from "@/utils/type";
import { useState } from "react";

export default function App({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [user, setUser] = useState<User>({
        ...initialUserState,
        setName: (name: string) => {
            setUser((prevState) => ({
                ...prevState,
                name: name,
            }));
        },
        setBalance: (balance: string) => {
            setUser((prevState) => ({
                ...prevState,
                balance: balance,
            }));
        },
        setPhone: (phone: string) => {
            setUser((prevState) => ({
                ...prevState,
                phone: phone,
            }));
        },
        setMonth: (month: string) => {
            setUser((prevState) => ({
                ...prevState,
                month: month,
            }));
        },
    });

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
