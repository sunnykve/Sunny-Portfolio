import React from 'react';
import HomeShocase from '../../components/home/HomeShocase';
import '../../components/home/home.css';
import SkilGraph from '../../components/home/SkilGraph';
import Project from '../../components/home/Project';
import ScrollToTop from 'react-scroll-to-top';

const Home = () => {
    return (
        <>
            <HomeShocase />
            <SkilGraph />
            <Project />
            <ScrollToTop smooth />
        </>
    )
}

export default Home
