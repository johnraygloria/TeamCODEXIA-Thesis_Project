import React, { useState, useEffect, useRef } from 'react';
import { FaSync } from 'react-icons/fa';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import AIimage from "../Components/Assets/ai.png"; // Import the image
import '../pages/ChatbotStyle.css';

const MODEL_NAME = 'gemini-1.0-pro';
const API_KEY = 'AIzaSyDwe06kQZT32Y1w6sbxIWsBDMUeHlosIpc'; // Add your Google API key here

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

const generationConfig = {
  temperature: 1,
  topK: 0,
  topP: 0.95,
  maxOutputTokens: 2048,
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];

const chat = model.startChat({
  generationConfig,
  safetySettings,
  history: [],
});

const Chatbot1 = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([{ role: 'assistant', text: "Hi there👋! I am PlanIt Assistant how may I help you today?" }]);
  const chatContainerRef = useRef(null);

  const sendMessage = async () => {
    setChatHistory([...chatHistory, { role: 'user', text: message }, { role: 'assistant', text: "Thinking..." }]);
    const result = await chat.sendMessage(message);
    const response = result.response;
    setChatHistory(prevChatHistory => [...prevChatHistory, { role: 'user', text: message }, { role: 'assistant', text: response.text() }]);
    setMessage('');
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  
  const handleRefresh = () => {
    setChatHistory([{ role: 'assistant', text: "Hi there👋! I am PlanIt Assistant how may I help you today?" }]);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
      event.preventDefault();
    }
  };

  return (
    <>
      <div className="chatbot">
        <div className='chatbothead'>
          <h3>PlanItFamIt</h3>
          <h2>PlanIt Assistant</h2>
          <button className="refresh-button" onClick={handleRefresh}><FaSync /></button>
        </div>


        <ul className="chatbox" ref={chatContainerRef}>
            {chatHistory.map((chat, index) => (
            <li key={index} className={`chat ${chat.role}`}>
              {chat.role === "user" ? <p>{chat.text}</p> : <><img src={AIimage} alt="AI icon" className="AiImage" /><p>{chat.text}</p></>}
            </li>
          ))}
        </ul>


        <div className="chat-input">
          <textarea
            placeholder="Enter a message..."
            spellCheck="false"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="send-button" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot1;
