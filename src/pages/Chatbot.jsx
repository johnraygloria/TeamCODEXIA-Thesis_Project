import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../pages/ChatbotStyle.css';
import { FaRobot } from "react-icons/fa";

const Chatbot = () => {
    const [userMessage, setUserMessage] = useState(null);
    const [chatInput, setChatInput] = useState("");
    const [chatList, setChatList] = useState([{message: "Hi there👋! I am PlanIt Assistant how may I help you today?", className: "incoming"}]);
    const chatInputRef = useRef(null);
    const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here

    const createChatLi = useCallback((message, className) => {
        return { message, className };
    }, []);

    const generateResponse = useCallback(async (chatElement) => {
        const API_URL = "https://api.openai.com/v1/chat/completions";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: userMessage}],
            })
        }

        try {
            const response = await fetch(API_URL, requestOptions);
            const data = await response.json();
            const newChatElement = { ...chatElement, message: data.choices[0].message.content.trim() };
            setChatList(prevChatList => prevChatList.map(chat => chat === chatElement ? newChatElement : chat));
        } catch {
            const newChatElement = { ...chatElement, message: "Oops! Something went wrong. Please try again.", className: "error" };
            setChatList(prevChatList => prevChatList.map(chat => chat === chatElement ? newChatElement : chat));
        }
    }, [userMessage, API_KEY]);

    const handleChat = () => {
        if(!chatInput.trim()) return;
        const outgoingChat = createChatLi(chatInput.trim(), "outgoing");
        setChatList(prevChatList => [...prevChatList, outgoingChat]);
        setUserMessage(chatInput.trim());
        setChatInput("");
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            handleChat();
            event.preventDefault(); // Prevents the addition of a new line in the text field after pressing 'Enter'
        }
    }

    useEffect(() => {
        if(userMessage) {
            const incomingChat = createChatLi("Thinking...", "incoming");
            setChatList(prevChatList => [...prevChatList, incomingChat]);
            generateResponse(incomingChat);
        }
    }, [userMessage, createChatLi, generateResponse]);

    return (
        <div className="chatbot">
            <header className="chatbotheader">
                <h3>PlanItFamIt</h3>
                <h2>PlanIt Assistant</h2>
            </header>
            
        <ul className="chatbox">
            {chatList.map((chat, index) => (
                <li key={index} className={`chat ${chat.className}`}>
                    {chat.className === "outgoing" ? <p>{chat.message}</p> : <><span><FaRobot /></span><p>{chat.message}</p></>}
                </li>
            ))}
        </ul>

            <div className="chat-input">
                <textarea placeholder="Enter a message..." spellcheck="false" required value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyPress={handleKeyPress} ref={chatInputRef} />
                <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>send</span>
            </div>
        </div>
    );
}

export default Chatbot;
