import React, {useRef} from 'react';
import './contact.css';
import HSBC from '../../asstes/HSBC.png';
import BOC from '../../asstes/BOC.png';
import HS from '../../asstes/HS.png';
import SCB from '../../asstes/SCB.jpg';
import emailjs from '@emailjs/browser';

const Contact =() => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_4xewlvk', 'service_4xewlvk', form.current, {
            publicKey: '0mmVR4sSlYNqIF4rBMjcHY',
          })
          .then(
            (result) => {
              console.log('reuslt.text');
              e.target.resect();
              alert('Email Sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Previous Employer</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={HSBC} alt="Client" className="clientImg"/>
                    <img src={BOC} alt="Client" className="clientImg"/>
                    <img src={HS} alt="Client" className="clientImg"/>
                    <img src={SCB} alt="Client" className="clientImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name' />
                    <input type="email" className="email" placeholder='Your Email' name='your_email' />
                    <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact