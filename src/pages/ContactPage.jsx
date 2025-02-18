import React from 'react';
import { motion } from 'framer-motion'

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-subtitle">How can we help you?</p>

      <form className="contact-form">
        <div className="form-group">
          <label>First name</label>
          <input type="text" name="first_name" placeholder="First name" />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" name="last_name" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="Email Address" />
        </div>

        <div className="form-group">
          <label>Company <span className="optional">(optional)</span></label>
          <input type="text" name="company" placeholder="Company name" />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input type="text" name="country" placeholder="Country" />
        </div>

        <div className="form-group">
          <label>Topic</label>
          <input type="text" name="topic" placeholder="Topic" />
        </div>

        <div className="form-group full-width">
          <label>Message</label>
          <textarea name="message" rows="4" placeholder="Message"></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit ✈</button>
      </form>
    </div>
    </motion.div>
  );
}


export default ContactPage;
