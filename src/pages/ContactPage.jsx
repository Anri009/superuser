import React from 'react';

function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Feel free to reach out to me through this page.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" rows="4" required></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
