import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // バリデーション
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please enter the required fields (Name, Email Address, Message)');
      return;
    }

    setError('');
    setSuccess('送信中...');

    try {
      const response = await fetch('https://your-backend-endpoint.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess('メッセージを送信しました！');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('送信に失敗しました。');
      }
    } catch (error) {
      setError('送信に失敗しました。もう一度お試しください。');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="contact-container">
        <div className="title-bar">
          <h2 className="section-title">Contact</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          {/* {success && <p className="success-message">{success}</p>} */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="First name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Company <span className="optional">(optional)</span></label>
            <input
              type="text"
              name="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Message</label>
            <textarea
              name="message"
              rows="10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit ✈</button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactPage;
