import React, { useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos'


const SkilGraph = () => {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    const roundProgressStyle = {
        pathColor: '#6C63FF',
        textColor: '#a1a1a1',
        backgroundColor: '#3e98c7',
        pathTransitionDuration: 0.5,

    }
    const Circular = ({ val, text }) => {

        return (
            < div className='col-md-1 skill-div mb-2' data-aos='zoom-in-up' >
                <CircularProgressbar value={val} maxValue={10} strokeWidth={12} text={val + "/10"} styles={buildStyles({ ...roundProgressStyle })} />
                <p className='fw-light text-secondary mb-0 text-center'>{text}</p>
            </div>
        )


    };


    return (
        <div className='container-fluid my-5'>
            <h1 className='text-center fw-light'>Skill-Graph</h1>
            <hr></hr>
            <div className='row justify-content-center mx-0'>
                <Circular val={8.5} text='Html' />
                <Circular val={8} text='Css' />
                <Circular val={7.5} text='JavaScript' />
                <Circular val={8.5} text='Bootstra' />
                <Circular val={7} text='React-js' />
                <Circular val={8} text='Redux' />
                <Circular val={7} text='Api' />
                <Circular val={7} text='Github' />


            </div>
        </div>
    )
};

export default SkilGraph
