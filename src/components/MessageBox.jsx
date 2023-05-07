import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Header } from './Header';
import { MessageInput } from './MessageInput'
import { MessageList } from './MessageList'
import { SearchMessage } from './SearchMessage';

export const MessageBox = ({ contact, showContact }) => {
  const bgDark = useSelector(state => state.toolkit.bgDark);

  const [messages, setMessages] = useState([]);
  useEffect(() => {
      fetch('http://127.0.0.1:3001/messeges')
        .then(response => response.json())
        .then(messages => setMessages(messages))
  }, [messages]);

  const [getContacts, setGetContacts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3001/contacts')
      .then(response => response.json())
      .then(user => setGetContacts(user))
  }, [messages])

  const contactID = contact && contact.id;

  const [filteredMessages, setFilteredMessages] = useState(messages);

  useEffect(() => {
    if (!contact) return;
    setFilteredMessages(messages.filter((message) => (
      (message.senderId === 1 && message.receiverId === contact.id) ||
      (message.senderId === contact.id && message.receiverId === 1)
    )));
  }, [messages, contactID])

  const [showSearchMesseges, setShowSeachMessages] = useState(false);

  return (
    <div className='flex w-[70%] h-[100vh]'>
      <div className='h-[100vh] w-[100%] bg-green-200' style={bgDark ? { backgroundImage: 'url(bg-dark-telegram.png)' } : { backgroundImage: 'url(bg-telegram.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Header
          showContact={showContact}
          showSearchMesseges={showSearchMesseges}
          setShowSeachMessage={setShowSeachMessages} />
        <MessageList
          contact={contact}
          messages={messages}
          setMessages={setMessages}
          filteredMessages={filteredMessages}
          showContact={showContact}
        />
        <MessageInput
          getContacts={getContacts}
          contact={contact}
          messages={messages}
          setMessages={setMessages}
          filteredMessages={filteredMessages}
          showContact={showContact}
        />
      </div>
      <SearchMessage
        messages={messages}
        showSearchMesseges={showSearchMesseges}
        setShowSeachMessage={setShowSeachMessages} />
    </div>
  )
}
