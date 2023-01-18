import React from 'react'

const Footer = () => {
    return (
        <div className='container-fkuid footer text-light shadow text-center mx-0 py-3' style={{ background: '#6C63FF' }}>
            <p>Disclaimer</p>
            <p className='fw-light'>&copy; Sunny {new Date().getFullYear()}</p>
            <p className='fw-light'>Thanks for visiting my portfolio website</p>
        </div>
    )
}

export default Footer
