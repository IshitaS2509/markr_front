// src/pages/ContactUsPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './ContactUsPage.css';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send message', error);
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            {submitted && <p className="success-message">Thank you for contacting us!</p>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUsPage;