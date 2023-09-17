
import "./chatbot.css";


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
 

import React, { useState } from 'react';

function Chatbot() {
  const [chat, setChat] = useState([]);
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (text.trim() === '' && !file) return;

    const newMessage = { user: 'You', text, file };
    setChat([...chat, newMessage]);

    setText('');
    setFile(null);
  };

  
  
    const handleFileClick = () => {
      // Trigger a click event on the hidden file input element
      document.getElementById('fileInput').click();
    };
  
    const handleFileChange = (e) => {
      // Handle file selection here
      const selectedFile = e.target.files[0];
      // Do something with the selected file
      console.log('Selected file:', selectedFile);
    };

  return (
    <div className="App">
      <div className="center-container">
        <div className="chat">
          <h1>Chatbot</h1>
        </div>
        <div className="chat-container">
          {chat.map((message, i) => (
            <div key={i}>
              <strong>{message.user}: </strong>
              {message.text && <p>{message.text}</p>}
              {message.file && (
                <div>
                  <strong>File:</strong>
                  <a href={URL.createObjectURL(message.file)} download>
                    {message.file.name}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text message"
          />
          <div className="file">
            <Stack direction="row" spacing={2}>
      <Button onClick={handleFileClick} variant="contained" component="label" className="file">
        Choose File
        <input  
          id="fileInput"
          type="file"
          accept=".txt,.pdf,.png,.jpg,.jpeg,.gif"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Button>
    </Stack>
    </div>
    <div className="send"><Stack direction="row" spacing={2}>
      <Button type="submit" variant="contained" component="label" className="file">
          Send
          </Button>
    </Stack></div>
    
    <div/>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
