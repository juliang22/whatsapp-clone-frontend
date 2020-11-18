import './css/App.css';
import Chat from './Chat';
import Sidebar from './Sidebar'
import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'

import axios from './axios.js'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
      .then(res => {
        console.log(res.data)
        setMessages(res.data)
      })
  }, [])

  useEffect(() => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;
    const pusher = new Pusher('6e1e4b59a56111a2838d', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages'); //subscribing to the messages channel we added with pusher to the backend
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    // important to unsubscribe as useEffect will create a new subscription every time messages changes
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [messages]) //every time new message is added to the backend, pusher subscription triggers and setMessages updates messages causing a rerender on the frontend

  return (
    <div className="app">
      <div className="app__body">
        < Sidebar />
        {messages && < Chat messages={messages} />}
      </div>
    </div>
  );
}

export default App;
