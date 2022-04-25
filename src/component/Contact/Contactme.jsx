import { useRef as UseRef, useState as UseState} from 'react'
import './Contactme.css'
import emailjs from "emailjs-com";

const contactme = () => {
    const formRef = UseRef("")
    const [done, setDone] = UseState(false)
    const HandleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_7ovo6zf', 'template_wqk8mjm', formRef.current, 'mYrC1i-kyRfCyLHAl')
        .then((result) => {
            console.log(
                setDone(true)
            );
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className="c">
    <div className="c-bg"></div>
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">Don't be shy let's talk!</h1>
        <div className="c-info">
          <div className="c-info-item">
            <img src="/phone.png" alt="" className="c-icon" />
            09666801087
          </div>
          <div className="c-info-item">
            <img className="c-icon" src='/email.png' alt="" />
            alessandro_alfonso@dlsu.edu.ph
          </div>
          <div className="c-info-item">
            <img className="c-icon" src='/github.png' alt="" />
            <a href='https://github.com/AlessandroAlfonso?tab=repositories'>Github</a>
          </div>
          <div className="c-info-item">
            <img className="c-icon" src='/linkedin.png' alt="" />
            <a href='https://www.linkedin.com/in/alessandro-alfonso-86a556237/'>LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="c-right">
        <p className="c-desc">
          <b>What’s your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. me.
        </p>
        <form ref={formRef} onSubmit={HandleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Message Sent!"}
          </form>
      </div>
    </div>
  </div>
  )
}

export default contactme