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
            img: '1.jpg',
            messege: "Hello Leanne how.."
        },
        {
            id: 2,
            firstName: 'Ervin ',
            lastName: 'Howell',
            img: '2.jpg',
            messege: "how do you do"
        },
        {
            id: 3,
            firstName: 'Clementine ',
            lastName: 'Bauch',
            img: '3.jpg',
            messege: "Чихели сози"
        },
        {
            id: 4,
            firstName: 'Patricia  ',
            lastName: 'Lebsack',
            img: '4.jpg',
            messege: "Как успехи"
        },
        {
            id: 5,
            firstName: 'Chelsey ',
            lastName: 'Dietrich',
            img: '5.jpg',
            messege: "Что нового ?..."
        },
        {
            id: 6,
            firstName: 'Mrs. Dennis  ',
            lastName: 'Schulist',
            img: '6.jpg',
            messege: "Чем занят"
        },
        {
            id: 7,
            firstName: 'Kurtis ',
            lastName: 'Weissnat',
            img: '7.jpg',
            messege: "Как погода сегодня"
        },
        {
            id: 8,
            firstName: 'Nicholas ',
            lastName: 'Runolfsdottir V',
            img: '8.jpg',
            messege: "Справился с домашкой?"
        },
        {
            id: 9,
            firstName: 'Clementine ',
            lastName: 'Bauch',
            img: '9.jpg',
            messege: "Какие планы на сегодня"
        },
        {
            id: 10,
            firstName: 'Glenna ',
            lastName: 'Reichert',
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
    const [filterContacts, setFilterContacts] = useState(getContacts);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        const filteredContacts = contacts.filter(contact => contact.firstName.toLowerCase().includes(value));
        setFilterContacts(filteredContacts)
    }

    const [showMenuBurger, setShowMenuBurger] = useState(false);

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
                    <MessageBox bgDark={bgDark} contact={choosenContact} showContact={showContact} contacts={contacts} />
                    <ShowBurgerMenu
                        bgDark={bgDark}
                        setBgDark={setBgDark}
                        showMenuBurger={showMenuBurger}
                    />
                </div>
                : <div style={{ backgroundImage: "url(loginBg.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='flex justify-center h-[100vh] items-center bg-gray-300'>
                    <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                </div>
            }
        </>

    )
}
