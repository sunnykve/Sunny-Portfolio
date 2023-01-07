import React, { useEffect, useState } from "react"
import './Contact.css'
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai"
import AOS from 'aos'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import swal from "sweetalert"
const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, delay: 100 });
    }, [])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loding, setLoading] = useState(false)
    const Navigate = useNavigate()

    const handleSubmit = async () => {
        if (!name || !email || !message) return swal('Error', "All fields are required", 'warning')
        const data = {
            Name: name,
            Email: email,
            Message: message,
            Date: new Date().toLocaleDateString()
        };
        setLoading(true)
        try {
            await axios.post('https://sheet.best/api/sheets/ea15ac23-1e18-4ed4-8891-e41e807118b7', data).then((response) => {
                swal("Message Sent Successfully. I'II get back to you shortly").then(() => {
                    Navigate('/')
                })
            })

        } catch (error) {
            setLoading(false);
            return swal('Oops!', 'Unable to send message', 'error')
        }
        setLoading(false)
    }






    return (
        < div className='containet p-4' >
            <div className='row justify-content-center mx-0'>
                {/*left div*/}
                <div className='col-md-4 p-5 bg-light rounded mt-5 shadow' data-aos='flip-right'>
                    <h1 className='fw-light'> Get in touch</h1>
                    <hr></hr>
                    <div className='mb-3'>
                        <lable>Name</lable>
                        <input type='text' value={name} onChange={e => setName(e.target.value)} className='form-control' placeholder='Enter your name' />
                    </div>
                    <div className='mb-3'>
                        <lable>Email</lable>
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)} className='form-control' placeholder='Enter your email' />
                    </div>
                    <div className='mb-3'>
                        <label>Message</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} className='form-control' placeholder='enter your message here...'></textarea>
                    </div>
                    <div className='text-end'>
                        <button className='btn custom-btn bg-light rounded-pill shadow'
                            disabled={loding}
                            onClick={handleSubmit}
                        >Send</button>
                    </div>
                    <h6 className='tet-center'>or</h6>
                    <hr></hr>
                    <SocialComponent />
                </div>
                {/* right div*/}
                <div className='col-md-6 p-5 mt-5'>
                    <img src='/assets/contact.png' alt='contact' className='contact-img' data-aos='zoom-in' />
                </div>
            </div>


        </div >
    )
}

export default Contact

export const SocialComponent = () => {
    return (
        <div className='d-flex justify-content-evenly'>
            <a href='https://github.com' target='_blank' style={{ textDecoration: 'none' }}>
                <button className='btn bg-light shadow rounded-pill custom-btn'> <AiFillGithub /></button>
            </a>
            <a href='https://linkedin.com' target='_blank' style={{ textDecoration: 'none' }}>
                <button className='btn bg-light shadow rounded-pill custom-btn'> <AiFillLinkedin /></button>
            </a>
            <a href='https://gmail.com' target='_blank' style={{ textDecoration: 'none' }}>
                <button className='btn bg-light shadow rounded-pill custom-btn'> <AiFillMail /></button>
            </a>
        </div>

    )
}
