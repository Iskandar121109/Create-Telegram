import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { HeaderEllipseModal } from './HeaderEllipseModal';

export const Header = ({ showContact, showSearchMesseges, setShowSeachMessage, bgDark }) => {
  const [showElModal, setShowElModal] = useState(false);
  const onDark = bgDark ? 'bg-black/70 text-white' : 'bg-white';
  const headerStyle = ['w-[100%] relative h-[10vh]  flex items-center justify-between pr-4', onDark];
  const iconsHover = bgDark ? 'hover:bg-gray-500 p-2 rounded-full' : 'hover:bg-gray-200 p-2 rounded-full';
  return (
    <div className={headerStyle.join(' ')}>
      {showContact && showContact.map(contact => (
        <div key={contact.id} className='flex items-center gap-5 text-2xl ml-10 cursor-pointer '>
          <img className='w-[55px] h-[55px] rounded-full' src={contact.img} alt={contact.firstName} />
          <p>{contact.firstName} {contact.lastName}</p>
        </div>
      ))}
      <div className='flex items-center gap-3'>
        <span className={iconsHover}><AiOutlineSearch onClick={() => setShowSeachMessage(!showSearchMesseges)} className='z-10 text-3xl top-2 text-gray-400' /></span>
        <span className={iconsHover}><FaEllipsisV onClick={() => setShowElModal(!showElModal)} className='text-2xl' /></span>
      </div>
      {showElModal && <HeaderEllipseModal bgDark={bgDark} />}
    </div>
  )
}
