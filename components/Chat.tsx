'use client'
import React, { useState, KeyboardEvent } from "react";
import { BsXDiamondFill } from "react-icons/bs";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const Chat: React.FC = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "hello", sender: "user" },
    { text: "This is a response from the chatbot.", sender: "bot" },
    { text: "this example of chat", sender: "user" },
    { text: "This is a response from the chatbot.", sender: "bot" },
    { text: "design with tailwind", sender: "user" },
    { text: "This is a response from the chatbot.", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState<string>("");

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleSend = () => {
    if (userInput.trim() !== "") {
      addUserMessage(userInput);
      respondToUser(userInput);
      setUserInput("");
    }
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const addUserMessage = (message: string) => {
    setMessages([...messages, { text: message, sender: "user" }]);
  };

  const addBotMessage = (message: string) => {
    setMessages([...messages, { text: message, sender: "bot" }]);
  };

  const respondToUser = (userMessage: string) => {
    setTimeout(() => {
      addBotMessage("This is a response from the chatbot.");
    }, 500);
  };

  return (
    <div className="">
      <div className="fixed bottom-0 right-0 mb-4 mr-4 z-50">
        <button
          id="open-chat"
          className="bg-blue-500 text-white py-2 px-4  hover:bg-blue-600 transition duration-500 rounded-full"
          onClick={toggleChatbox}
        >
        <BsXDiamondFill className="h-7 w-7"/>
        </button>
      </div>

      {isChatboxOpen && (
        <div id="chat-container" className="fixed bottom-16 right-4 w-96 z-50">
          <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
            <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
              <p className="text-lg font-semibold">Khalid&apos;s AI</p>
              <button
                id="close-chat"
                className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                onClick={toggleChatbox}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div id="chatbox" className="p-4 h-80 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.sender === "user" ? "text-right" : ""}`}
                >
                  <p
                    className={`${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    } rounded-lg py-2 px-4 inline-block`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t flex">
              <input
                id="user-input"
                type="text"
                placeholder="Type a message"
                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyUp={handleKeyUp}
              />
              <button
                id="send-button"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
