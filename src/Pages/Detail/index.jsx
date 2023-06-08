import React from 'react'

import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';

import CardSection from '../../components/Organism/CardSection';
import { CardDetails, CardMovies } from '../../components/Molecule/Card';
import Nav from '../../components/Molecule/Nav';
import { ImageParallax, Search } from '../../components/Atom';

export default function Detail() {

    const genre = ['Drama', 'Romance']

    const TextDetail = ({ children, variant, externalStyle = null }) => {
        return (
            <Typography sx={{ fontWeight: 'bold', color: 'white', ...externalStyle }} variant={variant}>{children}</Typography>
        )
    }

    const TextRelease = ({ year, season, origin }) => {
        return (
            <TextDetail externalStyle={{ display: 'flex', justifyContent: { xs: 'center', lg: 'left' }, alignItems: 'center' }} variant="h5">{year} <CircleIcon sx={{ fontSize: 'small', mx: 1 }} /> {season} Season <CircleIcon sx={{ fontSize: 'small', mx: 1 }} /> {origin}</TextDetail>
        )
    }

    const TextGenre = ({ data }) => {
        return (
            <TextDetail variant='h5' externalStyle={{ mt: 2 }}>{data.join(' | ')}</TextDetail>
        )
    }

    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid xs={1} sx={{ backgroundColor: 'black', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Nav />
            </Grid>
            <Grid xs={11} sx={{ minHeight: '100vh' }}>
                <Grid container sx={{ backgroundColor: 'black', py: 4, display: 'flex', flexDirection: 'row', height: '100vh' }} spacing={10}>
                    <Grid item xs={12} lg={6} sx={{ justifyContent: { xs: 'center', lg: 'right' }, display: 'flex', alignItems: 'center' }}>
                        <CardDetails />
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ justifyContent: { xs: 'center', lg: 'left' }, display: 'flex', alignItems: { lg: 'center', xs: 'start' } }}>
                        <Box sx={{ width: '75%', height: '50%', padding: 0, display: 'flex', textAlign: { xs: 'center', lg: 'left' }, flexDirection: 'column' }}>
                            <TextDetail variant="h4">haloa</TextDetail>
                            <TextRelease year='2020' season='2' origin='Western' />
                            <TextDetail externalStyle={{ mt: 2 }} variant="h5">In a dystopian future, a young rebel discovers a hidden truth that shakes the foundations of society. With the fate of humanity at stake, they embark on a dangerous journey, battling formidable enemies and navigating unexpected alliances. This epic tale explores love, sacrifice, and the power of hope in a world on the brink of destruction.</TextDetail>
                            <TextGenre data={genre} />
                            <Button sx={{ mt: 5, textDecoration: 'none', px: 0, justifyContent: { xs: 'center', lg: 'left' } }}>Add To Favorite</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}
