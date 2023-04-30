import React, { useEffect, useState } from 'react'
import { ContactList } from './ContactList'
import { LoginPage } from './LoginPage'
import { MessageBox } from './MessageBox'
import { ShowBurgerMenu } from './ShowBurgerMenu'

export const Telegram = () => {
    const [bgDark, setBgDark] = useState(false);

    const [contacts, setContacts] = useState([
        {
            id: 1,
            firstName: 'Leanne',
            lastName: 'Graham',
            countMessage: 2,
            status: true,
            img: '1.jpg',
            messege: "Hello Leanne how.."
        },
        {
            id: 2,
            firstName: 'Ervin ',
            lastName: 'Howell',
            countMessage: 5,
            status: false,
            img: '2.jpg',
            messege: "how do you do"
        },
        {
            id: 3,
            firstName: 'Clementine ',
            lastName: 'Bauch',
            countMessage: 6,
            status: true,
            img: '3.jpg',
            messege: "Чихели сози"
        },
        {
            id: 4,
            firstName: 'Patricia  ',
            lastName: 'Lebsack',
            countMessage: 8,
            status: false,
            img: '4.jpg',
            messege: "Как успехи"
        },
        {
            id: 5,
            firstName: 'Chelsey ',
            lastName: 'Dietrich',
            countMessage: 1,
            status: true,
            img: '5.jpg',
            messege: "Что нового ?..."
        },
        {
            id: 6,
            firstName: 'Mrs. Dennis  ',
            lastName: 'Schulist',
            countMessage: 15,
            status: false,
            img: '6.jpg',
            messege: "Чем занят"
        },
        {
            id: 7,
            firstName: 'Kurtis ',
            lastName: 'Weissnat',
            countMessage: 22,
            status: true,
            img: '7.jpg',
            messege: "Как погода сегодня"
        },
        {
            id: 8,
            firstName: 'Nicholas ',
            lastName: 'Runolfsdottir V',
            countMessage: 4,
            status: false,
            img: '8.jpg',
            messege: "Справился с домашкой?"
        },
        {
            id: 9,
            firstName: 'Clementine ',
            lastName: 'Bauch',
            countMessage: 7,
            status: false,
            img: '9.jpg',
            messege: "Какие планы на сегодня"
        },
        {
            id: 10,
            firstName: 'Glenna ',
            lastName: 'Reichert',
            countMessage: 6,
            status: true,
            img: '10.jpg',
            messege: "JS или TS ?"
        }
    ]);
    const [showContact, setShowContact] = useState([]);
    const showHeaderContact = (id) => {
        setShowContact([contacts.find(contact => contact.id === id)])
    }
    const [choosenContact, setChoosenContact] = useState();

    const [shoose, setShoose] = useState(false);
    const onContactClick = (id) => {
        setChoosenContact(contacts.find((contact) => contact.id === id))
    }
    const selectShoose = () => {
        setShoose(true)
    }
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [])

    const getContacts = JSON.parse(localStorage.getItem('contacts'));
    const contactsForSearch = [
        {
            id: 11,
            firstName: 'Алишер',
            lastName: 'Нарзуллоев',
            countMessage: 2,
            status: true,
            img: '/contacts/AlisherNarzulloev.jpg',
            messege: "Hello Leanne how.."
        },
        {
            id: 12,
            firstName: 'Антон ',
            lastName: 'Безухов',
            countMessage: 5,
            status: false,
            img: '/contacts/AntonBezukhov.jpg',
            messege: "how do you do"
        },
        {
            id: 13,
            firstName: 'Бахтовар ',
            lastName: 'Мамуров',
            countMessage: 6,
            status: true,
            img: '/contacts/BahtovarMamurov.jpg',
            messege: "Чихели сози"
        },
        {
            id: 14,
            firstName: 'Диловар',
            lastName: 'Саидов',
            countMessage: 8,
            status: false,
            img: '/contacts/DilovarSaidov.jpg',
            messege: "Как успехи"
        },
        {
            id: 15,
            firstName: 'Фаха',
            lastName: 'Исоев',
            countMessage: 1,
            status: true,
            img: '/contacts/fahaIsoev.jpg',
            messege: "Что нового ?..."
        },
        {
            id: 16,
            firstName: 'Хасан',
            lastName: 'Солиев',
            countMessage: 15,
            status: false,
            img: '/contacts/HasanSoliev.jpg',
            messege: "Чем занят"
        },
        {
            id: 17,
            firstName: 'Муниса',
            lastName: '',
            countMessage: 22,
            status: true,
            img: '/contacts/Munisa.jpg',
            messege: "Как погода сегодня"
        },
        {
            id: 18,
            firstName: 'Нигора',
            lastName: '',
            countMessage: 4,
            status: false,
            img: '/contacts/Nigora.jpg',
            messege: "Справился с домашкой?"
        },
        {
            id: 19,
            firstName: 'Озодамо',
            lastName: 'Фаромуз',
            countMessage: 7,
            status: false,
            img: '/contacts/Ozadamo.jpg',
            messege: "Какие планы на сегодня"
        },
        {
            id: 20,
            firstName: 'Шахрон',
            lastName: 'Комилов',
            countMessage: 6,
            status: true,
            img: '/contacts/ShakhronKomilov.jpg',
            messege: "JS или TS ?"
        }
    ];
    const concatContacts = [...getContacts, ...contactsForSearch];

    const [filterContacts, setFilterContacts] = useState(contacts);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        if (value !== '') {
            const filteredContacts = concatContacts.filter(contact => contact.firstName.toLowerCase().includes(value));
            setFilterContacts(filteredContacts)
        } else {
            const filteredContacts = contacts.filter(contact => contact.firstName.toLowerCase().includes(value));
            setFilterContacts(filteredContacts)
        }
    }

    const [showMenuBurger, setShowMenuBurger] = useState(false);
    const [userLogin, setLoginUser] = useState([]);

    const [user, setUser] = useState({
        id: crypto.randomUUID(),
        login: '',
        password: ''
    })
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <>
            {loggedIn ?
                <div className='flex relative'>
                    <ContactList
                        bgDark={bgDark}
                        setBgDark={setBgDark}
                        showMenuBurger={showMenuBurger}
                        setShowMenuBurger={setShowMenuBurger}
                        filterContacts={filterContacts}
                        setContacts={setContacts}
                        contacts={contacts}
                        handleSearch={handleSearch}
                        showHeaderContact={showHeaderContact}
                        onContactClick={onContactClick}
                        selectShoose={selectShoose}
                        choosenContact={choosenContact}
                    />
                    <MessageBox
                        bgDark={bgDark}
                        contact={choosenContact}
                        showContact={showContact}
                    />
                    <ShowBurgerMenu
                        bgDark={bgDark}
                        setBgDark={setBgDark}
                        showMenuBurger={showMenuBurger}
                        setLoggedIn={setLoggedIn}
                    />
                </div>
                : <div style={{ backgroundImage: "url(loginBg.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='flex justify-center h-[100vh] items-center bg-gray-300'>
                    <LoginPage
                        userLogin={userLogin}
                        setLoginUser={setLoginUser}
                        setLoggedIn={setLoggedIn}
                        user={user}
                        setUser={setUser}
                    />
                </div>
            }
        </>

    )
}
