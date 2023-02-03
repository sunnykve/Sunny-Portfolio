import React, { useEffect } from 'react'
import { SocialComponent } from '../Contact/Contact'
import './about.css'
import AOS from 'aos';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div className='container-fluid my-5 mx-0'>
            <div className='text-center'>
                <img src='/assets/profile-img.jpg' alt='profile' className='profile-img' />
                <h1 className='fw-light'>About Me</h1>
                <hr className='mx-5'></hr>
                <h3 className='fw-light'>I am a web developer.<br /> I enjoy developing websites.<br />Proficiency in Html,CSS,JavaScript,Bootstrap,React.js,API,Redux, Github.</h3>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-6 mt-5'>
                    <h1 className='text-center fw-light mt-5'>Fresher</h1>
                    {/* <h4 className='fw-light text-center'>Some experience add</h4> */}
                </div>
                <div className='col-md-6' data-aos='fade-left' >
                    <img src="/assets/exp-img.png" alt="experience" className='about-img' />
                </div>

            </div>
            <div className='row justify-content-center'>
                <div className='col-md-6' data-aos='fade-right'>
                    <img src="/assets/edu.png" alt="education" className='about-img' />
                </div>

                <div className='col-md-6 mt-5'>
                    <h1 className='text-center fw-light mt-5'>Education</h1>
                    <h4 className='fw-light text-center'>B.E</h4>
                </div>
                <div className='text-center' data-aos='fade-up'>
                    <a style={{ textDecoration: 'none' }} href='/assets/Sunny-Resume.pdf' download>

                        <button className='btn custom-btn rounded-pill px-5 mt-5 shadow'>Get My Resume</button>
                    </a>
                    <h4 className='fw-light mt-5'>Social Links</h4>
                    <SocialComponent />
                </div>
            </div>
        </div>
    )
}

export default About
