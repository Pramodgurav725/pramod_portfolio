import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import linkdin from '../../assets/linkdin.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "573c6634-951d-43fd-896b-aa2131ca4cf3");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want to work on. You can contact anytime.</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>pramodgurav725@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                        <a href="https://www.linkedin.com/in/pramod-gurav-04b658259/" target="_blank" rel="noopener noreferrer">
                            <img src={linkdin} alt="LinkedIn Profile" /></a> <p>Pramod Gurav</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+917259524024</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Belagavi, Karnataka</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="Your Name"></label>
                    <input type="text" placeholder='Enter your Name' name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write Your Message here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
