import React, { useContext } from 'react'
import { FiEdit } from 'react-icons/fi'
import { TiDeleteOutline } from 'react-icons/ti'
import { Context } from '../../context/TelegramContext'

export const IncomingMessage = ({ message }) => {
    const { contactImg, darkModeStyle, showContact, deleteMessage } = useContext(Context)
    return (
        <div className=' w-[100%] flex justify-start items-end mb-2'>
            <img src={contactImg} className='w-[40px] h-[40px] rounded-full' alt="" />
            <div className={darkModeStyle}>
                <h1 className='font-bold text-blue-400 flex items-center justify-between gap-3'>
                    {showContact && showContact.map(contact => (
                        <div key={contact.id}>
                            {contact.firstName + ' ' + contact.lastName}
                        </div>
                    ))}
                    <FiEdit />
                    < TiDeleteOutline onClick={() => deleteMessage(message.id)} /></h1>
                <h1 key={message.id}>{message.emoji}{message.text}</h1>
                <p className='text-sm text-end text-gray-400'>{message.date}</p>
            </div>
        </div>
    )
}
