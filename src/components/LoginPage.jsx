import React, { useEffect, useState } from 'react'

export const LoginPage = ({ setLoggedIn, userLogin, setLoginUser, user, setUser }) => {

    const onUserInput = (key) => (e) => {
        setUser(
            { ...user, [key]: e.target.value }
        )
    }

    useEffect(() => {
        if (userLogin.length === 0) {
            return
        } else {
            localStorage.setItem('user', JSON.stringify(userLogin));
        }
    }, [userLogin])

    const [registredText, setRegistredText] = useState('Registration');
    const onRegister = () => {
        setLoginUser([...userLogin, user])
        localStorage.setItem('user', JSON.stringify(userLogin));
        setRegistredText('Registered')
        setUser({
            id: crypto.randomUUID(),
            login: '',
            password: ''
        })
    };

    const [error, setError] = useState('');

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('user'));
        const currentUser = users.find(user => user.login === "Leanne" && user.password === "asd123");
        const currentUserLast = users.find(user => user.login === "Ervin" && user.password === "asdqwe");
        if ((currentUser && currentUser.login === user.login && currentUser.password === user.password) ||
            (currentUserLast && currentUserLast.login === user.login && currentUserLast.password === user.password)) {
            setLoggedIn(true);
        } else {
            setError('Неверный логин и пароль')
            if (user.login === '' &&
                user.password === '') {
                setError('Поля не должно быть пустым')
            }
        }
    };
    const registrationStyle = [' px-6 py-2 hover:bg-green-600 rounded text-white',
        registredText === 'Registration' ? 'bg-green-500' : 'bg-orange-500'].join(' ');
    return (
        <div className='flex flex-col justify-center items-center gap-3 w-[500px] h-[350px] bg-black/70 rounded-xl' >
            <div className='text-white text-center '>
                <p className='text-red-500 text-3xl mb-2'>{error}</p>
                <h1 className='text-2xl'>Telegram Desktop</h1>
                <p>Добро пожаловать в Telegram  для ПК.</p>
                <p>Быстро и безопасный официальный клиент.</p>
            </div>
            <input className='bg-transparent border outline-green-500 border-gray-500 w-[350px] h-[50px] rounded-xl px-3 text-white' type="text" placeholder='login' onChange={onUserInput('login')} value={user.login} />
            <input className='bg-transparent border outline-green-500 border-gray-500 w-[350px] h-[50px] rounded-xl px-3 text-white' type="password" placeholder='password' onChange={onUserInput('password')} value={user.password} />
            <div className='flex gap-3 justify-end w-[70%]'>
                <button className={registrationStyle} onClick={onRegister}>{registredText}</button>
                <button className='bg-slate-500 px-6 py-2 hover:bg-slate-600 rounded text-white' onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}
