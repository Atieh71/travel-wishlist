import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState(""); 
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      setComments([...comments, { name, message }]);
      setName("");
      setMessage(""); 
    } else {
      alert("Please enter your name and message.");
    }
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p> You can contact me via email: <a href="Atiyeh.Gholipour71.com">Atiyeh.Gholipour71.com</a></p>
      <p>Feel free to leave any feedback.</p>
      
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here"
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Messages</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.name}</strong>: {comment.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
