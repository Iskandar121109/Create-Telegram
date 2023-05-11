import React, { useContext } from 'react'
import { FiEdit } from 'react-icons/fi'
import { TiDeleteOutline } from 'react-icons/ti'
import { Context } from '../../context/TelegramContext'
import { EditMessage } from '../EditMessage'

export const SendingMessage = ({ message }) => {
    const { darkModeStyle, showContact, editingMessageId,
        handleUpdateMessage, setEditingMessageId, deleteMessage } = useContext(Context)
    return (
        <div key={message?.id} className=' w-[100%] flex justify-end items-end mb-2 relative'>
            <div className={darkModeStyle}>
                <h1 className='font-bold text-blue-400 flex items-center justify-between gap-3'>
                    {showContact && showContact.map(contact => (
                        <div key={contact.id}>
                            {contact.firstName + ' ' + contact.lastName}
                        </div>
                    ))}
                    {editingMessageId === message?.id ? (
                        <EditMessage message={message} onUpdate={handleUpdateMessage} />
                    ) : (
                        <FiEdit onClick={() => setEditingMessageId(message.id)} />
                    )}
                    < TiDeleteOutline onClick={() => deleteMessage(message.id)} /></h1>
                <h1 key={message.id}>{message.emoji}{message.text}</h1>
                <p className='text-sm text-end text-gray-400'>{message.date}</p>
            </div>
        </div>
    )
}
