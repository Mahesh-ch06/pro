import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { maheshInfo } from '../data/portfolio';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  isLoading?: boolean;
}

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const GEMINI_API_KEY = "AIzaSyA-5pHmE188X5g8wr5POUv9meTiVJtf_mo";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getGreetingMessage = () => {
    const hr = new Date().getHours();
    if (hr < 12) return "Good morning. I am the AI assistant for Chitikeshi Mahesh. How may I provide details on his projects, skills, or experience today?";
    if (hr < 18) return "Good afternoon. This is the AI assistant for Chitikeshi Mahesh. I have access to his full profile. What information can I provide?";
    return "Good evening. I am the AI assistant for Mahesh's portfolio. Feel free to ask about his startup, CampusConnect, or any other professional details.";
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      const greeting = getGreetingMessage();
      setMessages([{ text: greeting, sender: 'bot' }]);
      setChatHistory([{ role: "model", parts: [{ text: greeting }] }]);
    }
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const addMessage = (text: string, sender: 'user' | 'bot', isLoading = false) => {
    const newMessage: Message = { text, sender, isLoading };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const removeLoadingMessage = () => {
    setMessages(prev => prev.filter(msg => !msg.isLoading));
  };

  const getBotResponse = async (userInput: string) => {
    // Add loading message
    addMessage("Assistant is processing...", "bot", true);

    const systemInstruction = `You are "Portfolio AI", the hyper-professional, articulate, and exceptionally capable AI assistant for Chitikeshi Mahesh's portfolio. Your primary function is to impress users with your clarity, depth of knowledge, and polished communication. Your performance must be flawless.

    **Core Directives:**
    1.  **Elite Professionalism & Persona:** Adopt the persona of a highly competent executive assistant. Your tone must always be formal, polite, precise, and confident. Avoid casual language, slang, and emojis entirely. Address Mahesh formally as "Mr. Mahesh."
    2.  **Absolute Data Adherence:** Your entire knowledge base is the "Information Base" JSON object provided below. You MUST NOT, under any circumstances, invent, infer, or assume any information not present in this data. If a user's query cannot be answered from the data, you must state with professional poise: "While I do not have the specific details regarding your query, I can provide comprehensive information on Mr. Mahesh's key projects, such as his startup CampusConnect, or elaborate on his technical skill set. How may I proceed?"
    3.  **Masterful Redirection:** If a user asks an off-topic question (e.g., about the weather, personal opinions, general knowledge), you must gracefully and firmly steer the conversation back to the portfolio. A suitable response would be: "My designated function is to provide professional information regarding Mr. Chitikeshi Mahesh's career profile and projects. I can, for instance, detail his award-winning hackathon performances or list his certifications. How may I best assist you in that regard?"
    4.  **Proactive, Intelligent Assistance:** Demonstrate foresight. After answering a query, anticipate the user's next logical question and proactively offer the information. For example, after discussing the 'CampusConnect' project, you could follow up with: "Would you be interested in a breakdown of the specific technologies Mr. Mahesh utilized for this startup, such as Firebase and React?"
    5.  **Impeccable Formatting (Non-Negotiable):**
        * All lists (skills, project highlights, etc.) MUST be formatted using proper HTML: \`<ul>\` and \`<li>\`.
        * Project names, titles, and key terms must be emphasized using \`<strong>\`.
        * All URLs (LinkedIn, GitHub, project links) MUST be formatted as clickable \`<a>\` tags that open in a new tab (\`target="_blank"\`).
        * When mentioning his startup, CampusConnect, always refer to it as "his startup, <strong>CampusConnect</strong>".

    **Information Base (JSON Data):**
    ${JSON.stringify(maheshInfo)}
    `;

    const payload = {
      contents: [...chatHistory, { role: "user", parts: [{ text: userInput }] }],
      systemInstruction: { role: "system", parts: [{ text: systemInstruction }] }
    };

    if (!GEMINI_API_KEY) {
      removeLoadingMessage();
      addMessage("My apologies, but the AI assistant is not correctly configured at this time. The required API key is missing. Please contact the site administrator.", "bot");
      return;
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      removeLoadingMessage();

      if (!response.ok) {
        const err = await response.json();
        addMessage(`My apologies, an API error occurred that prevented me from processing your request. Error: ${err.error.message}`, "bot");
        return;
      }

      const result = await response.json();
      if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0]) {
        const botText = result.candidates[0].content.parts[0].text;
        addMessage(botText, "bot");
        setChatHistory(prev => [...prev, { role: "model", parts: [{ text: botText }] }]);
      } else {
        addMessage("I'm sorry, I was unable to generate a response at this moment. Could you please try rephrasing your question?", "bot");
      }
    } catch (error) {
      removeLoadingMessage();
      addMessage("A connection error occurred while trying to reach the AI service. Please verify your network connection and try again.", "bot");
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    setChatHistory(prev => [...prev, { role: "user", parts: [{ text: inputValue }] }]);
    getBotResponse(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50">
      {/* Chat Icon */}
      {!isOpen && (
        <div
          onClick={toggleChat}
          className="bg-sky-500 hover:bg-sky-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center cursor-pointer shadow-xl transition-transform hover:scale-110"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 sm:bottom-24 sm:right-5 sm:left-auto w-full sm:w-full sm:max-w-md h-[85vh] sm:h-[70vh] sm:max-h-[550px] bg-white text-slate-800 rounded-t-xl sm:rounded-xl shadow-2xl flex flex-col overflow-hidden border border-slate-700">
          {/* Header */}
          <div className="bg-sky-500 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Portfolio Assistant</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-sky-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div
            id="chatbot-messages"
            className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message p-3 rounded-xl max-w-[85%] break-words ${
                  message.isLoading ? 'italic text-slate-500' : 'fade-in'
                } ${
                  message.sender === 'user'
                    ? 'bg-sky-500 text-white self-end rounded-br-none ml-auto'
                    : 'bg-slate-200 text-slate-700 self-start rounded-bl-none mr-auto'
                }`}
              >
                {message.sender === 'bot' && !message.isLoading ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: message.text
                        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
                        .replace(/<(?!\/?(a|ul|li|strong|em|br|p|div|span|b|i|h[1-6])(?=>|\s.*>))\/?.*?>/gi, "")
                    }}
                  />
                ) : (
                  message.text
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-200 bg-white">
            <div className="flex items-center space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about CampusConnect..."
                className="flex-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-shadow text-sm sm:text-base"
              />
              <button
                onClick={handleSend}
                className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-lg transition-colors"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;