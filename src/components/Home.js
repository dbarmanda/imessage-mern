import React from 'react'
import '../style/home.css'
import ChatOnline from './chatOnline/ChatOnline'
import Conversation from './conversation/Conversation.js'
import Message from './message/Message'
import './message/message.css'

export const Home = () => {
    return (
        <>

            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text" placeholder="Search for friend..." className="chatMenuInput" />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message/>
                            <Message/>
                            <Message user={true}/>
                            <Message user={true}/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message user={true}/>
                            <Message/>
                            <Message user={true}/>
                            <Message/>
                        </div>

                        <div className="chatBoxBottom">

                            <textarea
                                className="chatMessageInput"
                                placeholder=""></textarea>

                            <button className="chatSubmitButton">Send</button>
                        </div>
                    </div>
                </div>

                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                    </div>
                </div>
            </div>


        </>
    )
}
