import React from 'react'
import { Contact } from './Contact';
import { SearchContact } from './SearchContact'

export const ContactList = ({ bgDark,
  setBgDark, choosenContact, filterContacts, showHeaderContact, showMenuBurger, setShowMenuBurger, onContactClick, selectShoose, handleSearch }) => {
  const darkModeStyle = bgDark ? 'bg-black/70 text-white' : '';
  const contactListStyle = ['px-3 py-3 h-[100vh] w-[30%] contactList', darkModeStyle].join(' ');

  return (
    <div className={contactListStyle} >
      <SearchContact bgDark={bgDark}
        setBgDark={setBgDark} handleSearch={handleSearch} setShowMenuBurger={setShowMenuBurger} showMenuBurger={showMenuBurger} />
      <div className='flex flex-col gap-1 '>
        {filterContacts.map(contact => (
          < Contact
            bgDark={bgDark}
            setBgDark={setBgDark}
            key={contact.id}
            choosenContact={choosenContact}
            onContactClick={onContactClick}
            contact={contact}
            showHeaderContact={showHeaderContact}
            selectShoose={selectShoose}
          />
        ))}
      </div>
    </div>
  )
}
