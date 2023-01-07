import React, { useEffect } from 'react';
import { CgScrollV } from 'react-icons/cg';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';

const HomeShocase = () => {

    useEffect = () => {
        AOS.init({
            duration: 2000,
            delay: 1000
        }, [])
    };


    let words = ['Profiency in Html, Css, Javascrept, Git, React.']
    return (
        <>
            <div className='row justify-content-center mx-0 showcase-div mt-4'>
                <div className='col-md-6 showcae-text mt-5' data-aos='slide-left'>
                    <h1>Hi,</h1>
                    <h2>I'm Sunny, a web developer. </h2>
                    <h2>I enjoy developing websites.</h2>
                    <Typewriter
                        options={{
                            strings: words,
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            wrapperClassName: 'typewriter'
                        }}
                    />

                </div>
                <div className='col-md-6 showcase-right-div' data-aos='slide-right'>
                    <img src='/assets/devices.png' alt='' />
                </div>
            </div>
            <div className='text-center'>
                <button data-bs-toggle='tooltip' data-bs-placement='top' title='Scroll-down' className='btn btn-outline-dark shadow py-2 rounded-pill px-1'><CgScrollV /></button>
            </div>
        </>
    )
};

export default HomeShocase;
