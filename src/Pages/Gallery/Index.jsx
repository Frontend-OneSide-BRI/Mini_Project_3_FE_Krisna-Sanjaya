import React, { useEffect } from 'react'

import { Box, Grid, TextField } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';

import CardSection from '../../components/Organism/CardSection';


import { CardMovies } from '../../components/Molecule/Card';
import Nav from '../../components/Molecule/Nav';
import { ImageParallax, Search } from '../../components/Atom';

export default function Gallery() {

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
                        <Search />
                        <CardSection text={"Your Search"} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
