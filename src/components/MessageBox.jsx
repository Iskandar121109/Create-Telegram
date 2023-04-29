import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { Header } from './Header';
import { MessageInput } from './MessageInput'
import { MessageList } from './MessageList'
import { SearchMessage } from './SearchMessage';

export const MessageBox = ({ contact, showContact, bgDark, contacts }) => {

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Lorem ipsum dolor sit',
      date: moment().format('LT'),
      senderId: 1,
      receiverId: 1
    },

    {
      id: 2,
      text: 'how are you ?',
      date: moment().format('LT'),
      senderId: 1,
      receiverId: 2
    },
    {
      id: 3,
      text: 'hello',
      date: moment().format('LT'),
      senderId: 1,
      receiverId: 3
    },
    {
      id: 4,
      text: 'Hello Telegramm',
      date: moment().format('LT'),
      senderId: 1,
      receiverId: 4
    },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit',
      date: moment().format('LT'),
      senderId: 1,
      receiverId: 5
    },

    {
      id: 6,
      text: 'how are you ?',
      date: moment().format('LT'),
      senderId: 1,
      receiverId: 6
    },
    {
      id: 7,
      text: 'hello',
      date: moment().format('LT'),
      senderId: 1,
      receiverId: 7
    },
    {
      id: 8,
      text: 'Hello Telegramm',
      date: moment().format('LT'),
      senderId: 1,
      receiverId: 8
    },
    {
      id: 9,
      text: 'Lorem ipsum dolor sit',
      date: moment().format('LT'),
      senderId: 1,
      receiverId: 9
    },

    {
      id: 10,
      text: 'how are you ?',
      date: moment().format('LT'),
      senderId: 1,
      receiverId: 10
    },
  ]);
  const contactID = contact && contact.id;
  const [filteredMessages, setFilteredMessages] = useState([]);

  useEffect(() => {
    if (!contact) return;
    setFilteredMessages(messages.filter((message) => message.senderId === 1 && message.receiverId === contact.id ));
  }, [contactID])

  const [messagesLast, setMessagesLast] = useState([
    {
      id: 1,
      text: 'hello',
      date: moment().format('LT'),
      senderId: 3,
      receiverId: 1
    },
    {
      id: 2,
      text: 'how are you ?',
      date: moment().format('LT'),
      senderId: 2,
      receiverId: 1
    },
    {
      id: 3,
      text: 'bla bla ',
      date: moment().format('LT'),
      senderId: 4,
      receiverId: 1
    },
    {
      id: 4,
      text: 'Hello Telegramm',
      date: moment().format('LT'),
      senderId: 3,
      receiverId: 2
    },
  ]);
  const [filterLastMess, setFilterLastMess] = useState([])

  useEffect(() => {
    if (!contact) return;
    setFilterLastMess(messagesLast.filter((message) => message.senderId === 3 && message.receiverId === contact.id))
  }, [contactID])

  const [showSearchMesseges, setShowSeachMessages] = useState(false);

  // здесь данные сохроняться в localStor
  const [messagesInstore, setMessagesInStore] = useState(JSON.parse(localStorage.getItem("messeges")));

  const deleteMessage = (id) => {
    setMessagesInStore(messagesInstore.filter(message => message.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('messeges', JSON.stringify(messagesInstore))
  }, [messagesInstore])

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
          filterLastMess={filterLastMess}
          messagesInstore={messagesInstore}
        />
        <MessageInput
          setMessagesInStore={setMessagesInStore}
          messagesInstore={messagesInstore}
          messages={messages}
          setMessages={setMessages}
          filteredMessages={filteredMessages}
          showContact={showContact}
          bgDark={bgDark}
        />
      </div>
      <SearchMessage bgDark={bgDark} messages={messages} showSearchMesseges={showSearchMesseges} setShowSeachMessage={setShowSeachMessages} />
    </div>
  )
}
