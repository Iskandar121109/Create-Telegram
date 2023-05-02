import React, { useEffect, useRef } from 'react'
import { TiDeleteOutline } from "react-icons/ti";

export const MessageList = ({ messages, bgDark, filteredMessages, showContact, deleteMessage, contact }) => {
    const messageList = useRef();
    useEffect(() => {
        messageList.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const contactImg = showContact && showContact.map(contact => contact.img);

    const mListStyle = ['h-[80vh] px-4 py-3 w-[100%] overflow-auto']

    const darkModeStyle = bgDark ? 'bg-black/70 text-white border px-4 py-1 rounded-xl mb-2' : 'border bg-white px-4 py-1 rounded-xl mb-2';
    return (
        <div className={`${mListStyle}, messegeList`} >
            <div >
                {(contact) && filteredMessages.map(message => (
                    <div key={message.id} className=' w-[100%] flex justify-end items-end mb-2'>
                        {/* <img src={contactImg} className='w-[40px] h-[40px] rounded-full' alt="" /> */}
                        <div className={darkModeStyle}>
                            <h1 className='font-bold text-blue-400 flex items-center justify-between gap-3'>
                                {showContact && showContact.map(contact => (
                                    <div key={contact.id}>
                                        {contact.firstName + ' ' + contact.lastName}
                                    </div>
                                ))}
                                < TiDeleteOutline onClick={() => deleteMessage(message.id)} /></h1>
                            <h1 key={message.id}>{message.text}</h1>
                            <p className='text-sm text-end text-gray-400'>{message.date}</p>
                        </div>
                    </div>
                ))}
                <div ref={messageList} />

                {/* {contact && messagesInstore.map(message => (
                    <div key={message.id} className='w-[100%] flex justify-end items-end mb-2'>
                        <div className={darkModeStyle}>
                            <h1 className='font-bold text-blue-400 flex items-center justify-between gap-3'>{contactName}< TiDeleteOutline onClick={() => deleteMessage(message.id)} /></h1>
                            <h1 >{message.emoji}{message.text}</h1>
                            <p className='text-sm text-end text-gray-400'>{message.date}</p>
                        </div>
                    </div>))} */}
            </div>
        </div>
    )
}
