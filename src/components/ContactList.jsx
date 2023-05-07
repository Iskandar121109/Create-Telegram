import React from 'react'
import { Contact } from './Contact';
import { SearchContact } from './SearchContact';
import { useSelector } from 'react-redux'


export const ContactList = ({
  choosenContact, filterContacts, showHeaderContact,
  showMenuBurger, setShowMenuBurger, onContactClick, selectShoose, handleSearch}) => {
  const bgDark = useSelector(state => state.toolkit.bgDark);

  const darkModeStyle = bgDark ? 'bg-black/70 text-white' : '';
  const contactListStyle = [`px-3 py-3 h-[100vh] w-[30%] contactList`, darkModeStyle].join(' ');

  return (
    <div className={contactListStyle}  >
      <SearchContact handleSearch={handleSearch} setShowMenuBurger={setShowMenuBurger} showMenuBurger={showMenuBurger} />
      <div className='flex flex-col gap-1 '>
        {filterContacts.map(contact => (
          < Contact
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
