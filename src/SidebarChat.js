import { Avatar } from '@material-ui/core'
import React from 'react'

import './css/SidebarChat.css'

const SidebarChat = () => {
	return (
		<>
			<div className="sidebarChat">
				<Avatar />
				<div className="sidebarChat__info">
					<h2>Room name</h2>
					<p>This is a chat message</p>
				</div>
			</div>
			<div className="sidebarChat">
				<Avatar />
				<div className="sidebarChat__info">
					<h2>Room name</h2>
					<p>This is a chat message</p>
				</div>
			</div>
		</>
	)
}

export default SidebarChat
