import React, { useState } from 'react'
import { CiFaceSmile } from "react-icons/ci";
import { MdAttachFile } from "react-icons/md";
import { BiMicrophone } from "react-icons/bi";
import moment from 'moment';
import { useSelector } from 'react-redux';
import EmojiPicker from 'emoji-picker-react'

export const MessageInput = ({ messages, setMessages, contact }) => {
  const bgDark = useSelector(state => state.toolkit.bgDark);

  const [emojiVisible, setEmojiVisible] = useState(false);
  const [emojiSelect, setEmojiSelect] = useState(null);

  const [newMessage, setNewMessege] = useState({
    text: '',
  });

  const addNewMessage = (e) => {
    e.preventDefault();
    if (newMessage.text !== "") {
      setMessages([...messages, newMessage]);
      fetch('http://127.0.0.1:3001/create-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
      })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error))
      setNewMessege({
        text: '',
        date: ''
      });
      setEmojiSelect(null);
    }
  }

  const handleChange = (e) => {
    setNewMessege({
      ...newMessage, id: crypto.randomUUID(),
      text: e.target.value,
      senderId: 1,
      receiverId: contact.id,
      emoji: emojiSelect,
      date: moment().format('LT')
    });
  }

  const darkModeStyle = bgDark ? 'bg-black/90 text-white' : 'bg-gray-200';
  const microStyle = ['px-4 py-4  rounded-full', darkModeStyle].join(' ')
  const inputMessageStyle = ['border border-gray-500 w-[90%] flex items-center gap-3 h-[100%] rounded-2xl px-2', darkModeStyle];
  return (
    <div className='h-[10vh]  flex items-center gap-3 px-3 relative bottom-2 w-[100%]'>
      <div className={inputMessageStyle.join(" ")} >
        <div className={!emojiVisible ? 'hidden' : 'block absolute top-[-450px]'}>
          <EmojiPicker onEmojiClick={(e) => {
            setEmojiSelect(e.emoji)
            setEmojiVisible(!emojiVisible)
          }} />
        </div>
        <CiFaceSmile onClick={() => setEmojiVisible(!emojiVisible)} className='text-3xl text-gray-500 cursor-pointer ' />
        <form className='w-[100%] flex' onSubmit={addNewMessage}>
          <input
            type="text"
            placeholder='Сообщение '
            className='w-[100%] outline-none h-[100%] px-2 bg-transparent'
            onChange={handleChange}
            value={newMessage.text}
          />
          {emojiSelect && (
            <span className="mx-2" role="img" aria-label="emoji">
              {emojiSelect}
            </span>
          )}
          <MdAttachFile className='text-3xl text-gray-500 cursor-pointer' />
        </form>
      </div>
      <div className={microStyle}>
        <BiMicrophone className='text-3xl text-gray-400 cursor-pointer  ' />
      </div>
    </div >
  )
}
