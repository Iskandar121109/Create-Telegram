import React, { useEffect, useState } from 'react'
import { CiFaceSmile } from "react-icons/ci";
import { MdAttachFile } from "react-icons/md";
import { BiMicrophone } from "react-icons/bi";
import moment from 'moment';
import EmojiPicker from 'emoji-picker-react';
import data from 'emoji-picker-react';


export const MessageInput = ({
  messages, setMessages, setMessagesInStore, messagesInstore, bgDark }) => {
  const [emojiVisible, setEmojiVisible] = useState(false);
  const [emojiSelect, setEmojiSelect] = useState(null);

  const [newMessage, setNewMessege] = useState({
    id: crypto.randomUUID(),
    text: '',
    senderId: 1,
    receiverId: 1
  });

  useEffect(() => {
    JSON.parse(localStorage.getItem("messeges"))
  }, [])

  const addNewMessage = (e) => {
    e.preventDefault();
    if (newMessage.text !== "") {
      setMessages([...messages, newMessage]);
      setMessagesInStore([...messagesInstore, newMessage]);
      setNewMessege({
        id: crypto.randomUUID(),
        text: '',
        senderId: 1,
        receiverId: 1,
        date: moment().format('LT')
      });
      setEmojiSelect(null);
    }
  }
  const handleChange = (e) => {
    setNewMessege({
      ...newMessage, text: e.target.value, emoji: emojiSelect, date: moment().format('LT')
    });
  }

  const darkModeStyle = bgDark ? 'bg-black/90 text-white' : 'bg-gray-200';
  const microStyle = ['px-4 py-4  rounded-full', darkModeStyle].join(' ')
  const inputMessageStyle = ['border border-gray-500 w-[90%] flex items-center gap-3 h-[100%] rounded-2xl px-2', darkModeStyle];
  return (
    <div className='h-[10vh]  flex items-center gap-3 px-3 relative bottom-2 w-[100%]'>
      <div className={inputMessageStyle.join(" ")} >
        <div className={!emojiVisible ? 'hidden' : 'block absolute top-[-450px]'}>
          <EmojiPicker data={data} onEmojiClick={(e) => {
            setEmojiSelect(e.emoji)
            setEmojiVisible(!emojiVisible)
          }} />
        </div>
        <CiFaceSmile onClick={() => setEmojiVisible(!emojiVisible)} className='text-3xl text-gray-500 cursor-pointer ' />
        <form className='w-[100%] flex' onSubmit={addNewMessage}>
          <input
            type="text"
            placeholder='Сообщение'
            className='w-[100%] outline-none h-[100%] px-2 bg-transparent'
            onChange={handleChange}
            value={newMessage.text}
          />
          <MdAttachFile className='text-3xl text-gray-500 cursor-pointer' />
        </form>
      </div>
      <div className={microStyle}>
        <BiMicrophone className='text-3xl text-gray-400 cursor-pointer  ' />
      </div>
    </div >
  )
}
