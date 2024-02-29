import React, {useState} from 'react';
import './EmailForm.css'
function EmailForm(){
    const [email, setEmail]=useState('');
    const [subject, setSubject]=useState('');
    const [message, setMessage]=useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        // här anropar man funktionen som skickar mailet
        // exempel: avait sendMail({email, subject, message})
        console.log({email, subject, message});
    };
    return(
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label className='label'>Email</label>
                <input 
                type="email"
                className='input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <div>
                <label className='label'>Subject</label>
                <input 
                type="text"
                className='input'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required/>
            </div>
            <div>
                <label className='label'>Message</label>
                <textarea 
                className='input'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required/>
            </div>
            <div className="button-container">
                <button className="button">Send Email</button>
            </div>
        </form>
    );
}

export default EmailForm;