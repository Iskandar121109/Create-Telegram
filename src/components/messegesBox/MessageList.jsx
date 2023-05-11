import React, { useContext, useEffect, useRef } from 'react'
import { Context } from '../../context/TelegramContext';
import { IncomingMessage } from './IncomingMessage';
import { SendingMessage } from './SendingMessage';

export const MessageList = () => {
    const { filteredMessages, choosenContact, mListStyle, messages } = useContext(Context)
    const messageList = useRef();

    useEffect(() => {
        messageList.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (
        <div className={`${mListStyle}, messegeList`} >
            <div >
                {(choosenContact) && filteredMessages.map(message => (
                    <IncomingMessage
                        key={message.id}
                        message={message}
                    />
                ))}
                {(choosenContact) && filteredMessages.map(message => (
                    <SendingMessage
                        key={message.id}
                        message={message}
                    />
                ))}
                <div ref={messageList} />
            </div>
        </div>
    )
}
