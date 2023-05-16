import React, { useContext, useState } from 'react'
import { Context } from '../../context/TelegramContext'
import { Login } from './Login';
import { Registration } from './Registration';

export const LoginPage = () => {
    const { contacts } = useContext(Context);
    const [registred, setRegistrad] = useState(true);


    return (
        <div>
            {!registred ? <Registration setRegistrad={setRegistrad} /> : <Login />}
        </div>
    )
}
