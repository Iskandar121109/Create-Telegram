import { useEffect, useState } from "react";

export const ContactMessageText = ({ choosenContact, contact, getCount }) => {
    const [messagesContacts, setMessagesContacts] = useState([]);
    useEffect(() => {
        if (choosenContact) {
            fetch("http://127.0.0.1:3001/messages-contact/")
                .then((response) => response.json())
                .then((messages) => {
                    setMessagesContacts(messages);
                    const filteredMessages = messages.filter(
                        (message) => message.receiverId === contact.id
                    );
                    getCount(filteredMessages.length);
                });
        } else {
            setMessagesContacts([]);
        }
    }, [choosenContact, messagesContacts]);


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