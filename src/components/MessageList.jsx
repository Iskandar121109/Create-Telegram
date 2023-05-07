import React, { useEffect, useRef, useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { EditMessage } from './EditMessage';

export const MessageList = ({ filteredMessages, showContact, contact, messages, setMessages }) => {
    const bgDark = useSelector(state => state.toolkit.bgDark);
    const messageList = useRef();

    useEffect(() => {
        messageList.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const contactImg = showContact && showContact.map(contact => contact.img);

    const [editingMessageId, setEditingMessageId] = useState(null);
    const handleUpdateMessage = (updatedMessage) => {
        const messegeId = messages.find((message) => message.id === updatedMessage.id);
        if (messegeId.id >= 0) {
            const updatedMessages = [...messages];
            updatedMessages[messegeId.id] = updatedMessage;
            setMessages(updatedMessages);
        }
        setEditingMessageId(null);
    };
    const deleteMessage = async (id) => {
        try {
          const response = await fetch(`http://127.0.0.1:3001/delete-messages/${id}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            setMessages(filteredMessages.filter(message => message.id !== id));
          }
        } catch (error) {
          console.error(error);
        }
      };

    const mListStyle = ['h-[80vh] px-4 py-3 w-[100%] overflow-auto']

    const darkModeStyle = bgDark ? 'bg-black/70 text-white border px-4 py-1 rounded-xl mb-2' : 'border bg-white px-4 py-1 rounded-xl mb-2';
    return (
        <div className={`${mListStyle}, messegeList`} >
            <div >
                {(contact) && filteredMessages.map(message => (
                    <div key={message.id} className=' w-[100%] flex justify-start items-end mb-2'>
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
                ))}
                {(contact) && filteredMessages.map(message => (
                    <div key={message.id} className=' w-[100%] flex justify-end items-end mb-2 relative'>
                        <div className={darkModeStyle}>
                            <h1 className='font-bold text-blue-400 flex items-center justify-between gap-3'>
                                {showContact && showContact.map(contact => (
                                    <div key={contact.id}>
                                        {contact.firstName + ' ' + contact.lastName}
                                    </div>
                                ))}
                                {editingMessageId === message.id ? (
                                    <EditMessage message={message} onUpdate={handleUpdateMessage} />
                                ) : (
                                    <FiEdit onClick={() => setEditingMessageId(message.id)} />
                                )}
                                < TiDeleteOutline onClick={() => deleteMessage(message.id)} /></h1>
                            <h1 key={message.id}>{message.emoji}{message.text}</h1>
                            <p className='text-sm text-end text-gray-400'>{message.date}</p>
                        </div>
                    </div>
                ))}
                <div ref={messageList} />
            </div>
        </div>
    )
}
