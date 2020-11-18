import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'
import React, { useState } from 'react'

import './css/Chat.css'
import axios from './axios'

const Chat = ({ messages }) => {
	const [input, setInput] = useState('')

	const sendMessage = async (e) => {
		e.preventDefault()
		await axios.post('/messages/new', {
			message: input,
			name: "Julian",
			timestamp: "2 seconds ago",
			received: false
		})
		setInput('')
	}

	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar />
				<div className="chat__headerInfo">
					<h3>Room Name</h3>
					<p> Last Seen at...</p>
				</div>
				<div className="chat__headerRight">
					<IconButton >
						<SearchOutlined />
					</IconButton>
					<IconButton >
						<AttachFile />
					</IconButton>
					<IconButton >
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				{messages.map(({ name, message, timestamp, received, _id }) => (
					<p key={_id} className={`chat__message ${received && "chat__receiver"}`}>
						<span className="chat__name"> {name}</span>
						{message}
						<span className="chat__timestamp">
							{timestamp}
						</span>
					</p>
				))}
			</div>
			<div className="chat__footer">
				<InsertEmoticon />
				<form>
					<input
						type="text"
						placeholder="Type a message"
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
					<button
						type="submit"
						onClick={sendMessage}
					>
						Send a message
					</button>
					<MicIcon />
				</form>
			</div>
		</div>
	)
}

export default Chat
