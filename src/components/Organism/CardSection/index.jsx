import React from 'react'
import { Grid, Typography } from '@mui/material'
import { CardMovies, CardText } from '../../Molecule/Card'


export default function CardSection({ text, isText = false }) {
    console.log(text)
    return (
        <>
            {
                isText ? (
                    <>
                        <Typography variant="h4" sx={{ color: 'white', display: 'block', my: 2, fontWeight: 'bold' }}>{text}</Typography>
                        <Grid container spacing={3} column={12}>
                            <CardText />
                            <CardText />
                            <CardText />
                            <CardText />
                        </Grid>
                    </>
                ) : (
                    <>
                        <Typography variant="h4" sx={{ color: 'white', display: 'block', my: 2, fontWeight: 'bold' }}>{text}</Typography>
                        <Grid container spacing={4} column={12}>
                            <CardMovies />
                            <CardMovies />
                            <CardMovies />
                            <CardMovies />
                        </Grid>
                    </>
                )
            }
        </>
    )
}
