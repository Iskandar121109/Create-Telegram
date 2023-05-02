import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { Header } from './Header';
import { MessageInput } from './MessageInput'
import { MessageList } from './MessageList'
import { SearchMessage } from './SearchMessage';

export const MessageBox = ({ contact, showContact, bgDark, getFilterMesseges }) => {
  // const getContacts = JSON.parse(localStorage.getItem('contacts')).map(contact => contact.id);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Lorem ipsum dolor sit',
      date: moment().format('LT'),
      senderId: 1,
      receiverId: 1
    }
  ]);
  // localStorage.removeItem('messeges')
  // localStorage.setItem('messeges', JSON.stringify(messages))
  const [getContacts, setGetContacts] = useState();
  useEffect(() => {
    setGetContacts(JSON.parse(localStorage.getItem('user')))
  }, [messages])
  useEffect(() => {
    localStorage.setItem('messeges', JSON.stringify(messages))
  }, [messages])


  const contactID = contact && contact.id;

  const [getMessegesInLocal, setGetMessegesInLocal] = useState([]);

  useEffect(() => {
    const newMessagesInLocal = JSON.parse(localStorage.getItem('messeges'));
    setGetMessegesInLocal([...getMessegesInLocal, ...newMessagesInLocal])
  }, [messages])

  const [filteredMessages, setFilteredMessages] = useState(getMessegesInLocal);

  useEffect(() => {
    if (!contact) return;
    setFilteredMessages(messages.filter((message) => (message.senderId === 1 && message.receiverId === contact.id)));
  }, [messages, contactID])

  const [showSearchMesseges, setShowSeachMessages] = useState(false);

  const deleteMessage = (id) => {
    setFilteredMessages(filteredMessages.filter(message => message.id !== id));
  }

  getFilterMesseges(filteredMessages);

  return (
    <div className='flex w-[70%] h-[100vh]'>
      <div className='h-[100vh] w-[100%] bg-green-200' style={bgDark ? { backgroundImage: 'url(bg-dark-telegram.png)' } : { backgroundImage: 'url(bg-telegram.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Header
          showContact={showContact}
          bgDark={bgDark}
          showSearchMesseges={showSearchMesseges}
          setShowSeachMessage={setShowSeachMessages} />
        <MessageList
          bgDark={bgDark}
          deleteMessage={deleteMessage}
          contact={contact}
          messages={messages}
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
          bgDark={bgDark}
        />
      </div>
      <SearchMessage
        bgDark={bgDark}
        messages={messages}
        showSearchMesseges={showSearchMesseges}
        setShowSeachMessage={setShowSeachMessages} />
    </div>
  )
}
