import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { Instagram, LinkedIn } from '@mui/icons-material';
import { IconButton, TextField, Button } from '@mui/material';
import './Contact.css';

const Contact = () => {
  // Optional: form state for controlled inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just alert or log form data
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' }); // clear form
  };

  return (
    <Element name="Contact" className="contact__page">
      <div className="contact__container">
        <h1 className="contact__title">Contact Me</h1>
        <p>Email: <span>praveenasiva055@gmail.com</span></p>
        <p>Github Username: <span>praveenasiva05</span></p>
        <div className="contact__icons">
          <a href="https://www.linkedin.com/in/praveena-sivananthan-56b5ba319" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>

        {/* Contact Form */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </div>
    </Element>
  );
};

export default Contact;
