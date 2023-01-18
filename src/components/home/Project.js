import React, { useEffect } from 'react'
import { projectData } from '../../data'
import AOS from 'aos';

const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, delay: 3000 });
    }, [])

    return (
        <div>
            <div className='container-fluid my-5 mx-0'>
                <h1 className='text-center fw-light'>My Projects</h1>
                <hr></hr>
                <div className='container'>
                    {projectData.map((item, index) => (

                        <div className='row justify-content-between mx-0 shadow p-4 mb-5' key={index} data-aos={index % 2 === 0 ? 'fade-left ' : 'fade-right'}>
                            <div className='col-md-6' data-aos='Zoom-in'>
                                <img src={item.image} alt={item.title} className='project-img' />
                            </div>
                            <div className='col-md-6 text-center'>
                                <h3 className='fw-light'>{item.title}</h3>
                                <p className='fw-light'>{item.info}</p>
                                <div className='d-flex justify-content-between'>
                                    <a href={item.liveLink} target='_blank' style={{ textDecoration: "non" }} rel="noreferrer">

                                        <button className='btn custom-btn rounded-pill shadow'>Demo</button>
                                    </a>

                                    <a href={item.repoLink} target='_blank' style={{ textDecoration: "non" }} rel="noreferrer">
                                        <button className='btn custom-btn rounded-pill shadow'>Repo</button>
                                    </a>


                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Project
