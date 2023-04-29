import React, { useEffect, useState } from 'react'

export const LoginPage = ({ loggedIn, setLoggedIn }) => {
    const [userLogin, setLoginUser] = useState([]);

    const [user, setUser] = useState({
        id: crypto.randomUUID(),
        login: '',
        password: ''
    })
    
    const onUserInput = (key) => (e) => {
        setUser(
            { ...user, [key]: e.target.value }
        )
    }
    // localStorage.removeItem('user')
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userLogin))
    }, [userLogin])

    const onRegister = () => {
        setLoginUser([...userLogin, user])
        localStorage.setItem('user', JSON.stringify(userLogin))
    };

    const [error, setError] = useState('');

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('user'));
        const currentUser = users.find(user => user.login === "Iskandar" && user.password === "asd123");
        if (currentUser) {
            setLoggedIn(true);
        } else {
            setError('Неверный логин и пароль')
            if (user.login === '' &&
                user.password === '') {
                setError('Поля не должно быть пустым')
            }

        }
    };
    return (
        <div className='flex flex-col justify-center items-center gap-3 w-[500px] h-[350px] bg-black/70 rounded-xl' >
            <div className='text-white text-center'>
                <p className='text-red-500 text-3xl mb-2'>{error}</p>
                <h1 className='text-2xl'>Telegram Desktop</h1>
                <p>Добро пожаловать в Telegram  для ПК.</p>
                <p>Быстро и безопасный официальный клиент.</p>
            </div>
            <input className='bg-transparent border outline-green-500 border-gray-500 w-[350px] h-[50px] rounded-xl px-3 text-white' type="text" placeholder='login' onChange={onUserInput('login')} value={user.login} />
            <input className='bg-transparent border outline-green-500 border-gray-500 w-[350px] h-[50px] rounded-xl px-3 text-white' type="password" placeholder='password' onChange={onUserInput('password')} value={user.password} />
            <div className='flex gap-3 justify-end w-[70%]'>
                <button className='bg-green-500 px-6 py-2 hover:bg-green-600 rounded text-white' onClick={onRegister}>Registration</button>
                <button className='bg-slate-500 px-6 py-2 hover:bg-slate-600 rounded text-white' onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}
