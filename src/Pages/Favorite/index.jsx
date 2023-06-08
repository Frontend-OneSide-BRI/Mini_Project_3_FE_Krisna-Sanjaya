import React from 'react'

import { ImageParallax, Search } from '../../components/Atom'
import { CardSection, LayoutPage } from '../../components/Organism'

import { Grid } from '@mui/material'


export default function favorite() {
    const data = JSON.parse(localStorage.getItem('favorite')) ?? []
    return (
        <LayoutPage>
            <Grid container sx={{ width: '100%' }}>
                <ImageParallax />
            </Grid>
            <Grid container sx={{ backgroundColor: 'black', py: 4, display: 'flex', flexDirection: 'column' }}>
                <CardSection text={"Your Search"} max={20} data={data} />
            </Grid>
        </LayoutPage>
    )
}
