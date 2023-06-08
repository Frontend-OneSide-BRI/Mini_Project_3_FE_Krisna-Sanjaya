import React, { useEffect } from 'react'

import Nav from '../../components/Molecule/Nav';
import ImageParallax from '../../components/Atom/ImageParallax';
import CardSection from '../../components/Organism/CardSection';

import { Grid } from '@mui/material'

import './index.css'


export default function Home() {

    useEffect(() => {
        const parallax = document.querySelector('.parallax');
        const image = document.querySelector('.parallax img');

        const handleParallax = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const yPos = scrollTop / parallax.dataset.speed;

            image.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        };

        window.addEventListener('scroll', handleParallax);

        return () => {
            window.removeEventListener('scroll', handleParallax);
        };
    }, []);

    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid xs={1} sx={{ backgroundColor: 'black', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Nav />
            </Grid>
            <Grid xs={11}>
                <Grid container sx={{ width: '100%' }}>
                    <ImageParallax />
                </Grid>
                <Grid container sx={{ backgroundColor: 'black', py: 4, display: 'flex', flexDirection: 'column' }}>
                    <CardSection text="Trending" />
                    <CardSection text="Most Watched Movies" isText={true} />
                    <CardSection text="Liked" />
                </Grid>
            </Grid>
        </Grid>
    )
}
