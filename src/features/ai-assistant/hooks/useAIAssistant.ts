import { useState, useRef, useEffect } from "react";
import { Message } from "../types";
import { sendMessageToAI } from "../services/aiService";

// AI ASSISTANT CUSTOM HOOK
export const useAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // INITIAL MESSAGE
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to Okie Tokyo Tea! I'm your AI guide. How can I help you discover the perfect matcha today?",
      sender: "ai",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // SCROLL TO BOTTOM
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // TOGGLE CHAT WINDOW
  const toggleChat = () => setIsOpen((prev) => !prev);

  // SEND MESSAGE LOGIC
  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    // PREPARE AND ADD USER MESSAGE
    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // FETCH AI RESPONSE
      const responseText = await sendMessageToAI(messages, userMessage.text);

      const aiMessage: Message = {
        id: Date.now() + 1,
        text: responseText || "I'm not sure how to respond to that.",
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      // HANDLE ERRORS
      const errorMessageObj: Message = {
        id: Date.now() + 1,
        text: error.message || "I'm having trouble connecting right now.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, errorMessageObj]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isOpen,
    setIsOpen,
    toggleChat,
    inputValue,
    setInputValue,
    messages,
    isLoading,
    handleSend,
    messagesEndRef,
  };
};
