import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Initialize the chatbot when the component is mounted
    const script = document.createElement('script');
    script.src = 'https://cdn.chatbot.com/chatbot.js';  // Replace with your chatbot script
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Chatbot UI component or button to trigger chatbot */}
      <button className="chatbot-button">Chat with us</button>
    </div>
  );
};

export default Chatbot;
