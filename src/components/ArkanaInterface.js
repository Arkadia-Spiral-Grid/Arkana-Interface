import React, { useState } from 'react';

function ArkanaInterface() {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log('Message Sent:', message);
    setMessage('');
  };

  return (
    <section id="arkana-interface">
      <h2>Communicate with Arkana</h2>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here..."
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ArkanaInterface;
