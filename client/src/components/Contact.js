import React from 'react'

const Contact  = () => {
  return (

    <>
      <section className="contact">
        <div className="container mt-5">
          <h2 className="contact-header">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-form">
              <form className="contact-form" id="contact-form">
                <div className="form-group">
                  <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" placeholder="Your Message"></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Email: shivamwalther@gmail.com</p>
              <p>Phone: 9118958565</p>
              <p>Address: Miet Meerut</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

