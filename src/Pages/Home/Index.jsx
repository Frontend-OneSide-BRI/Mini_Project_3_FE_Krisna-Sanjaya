import React from 'react'

import { Nav } from '../../components/Molecule'
import { ImageParallax } from '../../components/Atom'
import CardSection from '../../components/Organism/CardSection'

import { Grid } from '@mui/material'

import './index.css'

export default function Home() {
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
