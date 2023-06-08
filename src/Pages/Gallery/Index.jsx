import React, { useEffect } from 'react'

import { Box, Grid, TextField } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';

import CardSection from '../../components/Organism/CardSection';

import ImageParallax from '../../components/Atom/ImageParallax';
import { CardMovies } from '../../components/Molecule/Card';
import Nav from '../../components/Molecule/Nav';

export default function Gallery() {
    const CssTextField = styled(TextField)({
        border: '1px solid transparent',
        width: '100%',
        '& label.Mui-focused': {
            color: '#A0AAB4',
            border: '1px solid transparent',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
            border: '1px solid transparent',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E0E3E7',
                border: '1px solid transparent',
            },
            '&:hover fieldset': {
                borderColor: '#B2BAC2',
                border: '1px solid transparent',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#6F7E8C',
                border: '1px solid transparent',
            },
        },
    });

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
        <>
            <Grid container sx={{ height: '100vh' }}>
                <Grid xs={1} sx={{ backgroundColor: 'black', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Nav />
                </Grid>
                <Grid xs={11}>
                    <Grid container sx={{ width: '100%' }}>
                        <ImageParallax />
                    </Grid>
                    <Grid container sx={{ backgroundColor: 'black', py: 4, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ backgroundColor: 'white', width: '50%', margin: 'auto', padding: '10px', borderRadius: '20px', mt: 3, mb: 10, fontWeight: 'bold' }}>
                            <CssTextField label="Search Movies" id="custom-css-outlined-input" />
                        </Box>
                        <CardSection text={"Your Search"} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
