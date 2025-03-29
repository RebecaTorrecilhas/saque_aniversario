import { User } from '@/utils/type';
import { createContext } from 'react';

export const initialUserState: User = {
    name: "",
    balance: "",
    phone: "",
    month: "",
    setName: () => { },
    setBalance: () => { },
    setPhone: () => { },
    setMonth: () => { },
}

const UserContext = createContext<User>(initialUserState);

export default UserContext;