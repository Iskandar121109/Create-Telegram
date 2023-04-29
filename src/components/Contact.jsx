import React, { useState } from 'react'

export const Contact = ({ bgDark,
    setBgDark, contact, showHeaderContact, onContactClick, selectShoose, choosenContact }) => {
    const [action, setAction] = useState(false);
    const hoverBgDark = bgDark ? 'hover:bg-slate-600' : 'hover:bg-slate-300'
    const choseBgDark = bgDark ? 'bg-slate-600' : 'bg-slate-300'
    const contactStyle = [
        'flex items-center gap-5 text-2xl cursor-pointer rounded pl-2 py-2',
        contact.id === (choosenContact && choosenContact.id) ? choseBgDark : '', hoverBgDark];
    return (
        <div onClick={() => {
            showHeaderContact(contact.id);
            onContactClick(contact.id);
            selectShoose();
            setAction(!action)
        }}
            className={contactStyle.join(' ')}>
            <img className='w-[55px] h-[55px] rounded-full' src={contact.img} alt={contact.firstName} />
            <div>
                <p>{contact.firstName} {contact.lastName}</p>
                <p className='text-[17px]'>{contact.messege}</p>
            </div>
        </div>
    )
}
