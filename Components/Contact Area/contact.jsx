import React from 'react'
import './contact.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "d10750db-d945-445e-97d6-cb801d5ca067");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            console.log("Form Submitted!");
            alert("Form Successfully Submitted!");
            event.target.reset();
        } else {
            console.log("Error", data);
            alert("Error! Form cannot be submitted.");
            setResult(data.message);
        }
    };
    return (
        <div className='contact'>

            <div className="contact-title" id="CONTACT">
                <h1>Connection Hub</h1>
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>zestful.zeaolt@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faPhone} />
                            <p>+91 93108 18435</p>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <a style={{textDecoration:"none",color:"inherit"}} href="https://www.linkedin.com/in/vamika-arya-4a0179288/">LinkedIn</a>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faGithub} />
                            <a style={{textDecoration:"none",color:"inherit"}} href="https://github.com/6vam4arya">GitHub</a>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faCode} />
                            <a style={{textDecoration:"none",color:"inherit"}} href="https://leetcode.com/u/developing_developer07/">LeetCode</a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' />
                    <label htmlFor=''>Write your message here</label>
                    <textarea name="message" rows="10" placeholder='Enter your message' />
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>

        </div>
    )
}

export default contact