import React, { useState } from 'react'

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsCalendar4 } from "react-icons/bs";

export const SearchMessage = ({ showSearchMesseges, setShowSeachMessage, bgDark }) => {


    const getMessagesFor = JSON.parse(localStorage.getItem("messeges"));
    const [filteredMessage, setFilteredMessage] = useState(getMessagesFor);

    const onSearchMessages = (e) => {
        const value = e.target.value.toLowerCase()
        const filteredMessages = getMessagesFor.filter(message => message.text.toLowerCase().includes(value));
        setFilteredMessage(filteredMessages)
    }
    const darkModeStyle = bgDark ? 'bg-black/70 text-white' : 'bg-gray-100';
    const searchContainer = !showSearchMesseges ? 'h-[100vh] w-[0px] searchMessegeNone searchMessege' : 'w-[600px] h-[100vh] searchMessege';
    const searchContainerStyles = [darkModeStyle, searchContainer].join(' ');
    return (
        <div className={searchContainerStyles}>
            <div className='w-[100%] h-[10vh]  py-2 pr-2 pl-2 flex gap-2 justify-around items-center divSeach'>
                <div className='hover:bg-slate-300 rounded-full px-2 py-2' >
                    <AiOutlineClose onClick={() => setShowSeachMessage(false)} className='text-3xl text-gray-500 cursor-pointer' />
                </div>
                <div className='w-[80%] rounded-full relative'>
                    <AiOutlineSearch className='absolute z-10 text-2xl top-3 left-3 text-gray-400' />
                    <input onChange={onSearchMessages} className='rounded-full w-[100%] h-[45px] outline-none pl-11 pr-2 py-1 border border-gray-300' type="search" placeholder='Search contact' />
                </div>
                <BsCalendar4 className='text-2xl text-gray-500 cursor-pointer' />
            </div>
            <div className='px-4 py-2 divSeach'>
                {filteredMessage && filteredMessage.map(message => (
                    <p key={message.id} className='bg-white mb-2 py-1 px-2 rounded text-green-700'>{message.text}</p>
                ))}
            </div>
        </div>
    )
}
