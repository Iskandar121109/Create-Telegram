import { useContext, useEffect, useState } from "react";
import { Context } from "../context/TelegramContext";

export const ContactMessageText = ({ getCount, contact }) => {
    const { choosenContact, messages } = useContext(Context);
    const [messagesContacts, setMessagesContacts] = useState([]);

    useEffect(() => {
        getContactMessage()
    }, [messages]);

    const getContactMessage = () => {
        fetch(`http://127.0.0.1:3001/messages-contact/${contact.id}`)
            .then((response) => response.json())
            .then((messages) => {
                setMessagesContacts(messages);
                const filteredMessages = messages && messages.filter(
                    (message) => message.receiverId === contact.id
                );
                getCount(filteredMessages.length);
            });
    }

    return (
        <div>
            {choosenContact && messagesContacts
                .filter(message => message.receiverId === contact.id)
                .splice(-1)
                .map(message => (
                    <div key={message.id} className="flex text-start overflow-hidden w-[100%]">
                        <span className="max-w-[80%] overflow-hidden whitespace-nowrap">{message.text}</span>
                    </div>
                ))}
        </div>
    );
};