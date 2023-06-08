import React from 'react'
import { Grid, Typography } from '@mui/material'
import { CardMovies, CardText } from '../../Molecule/Card'


export default function CardSection({ text, isText = false, data }) {
    console.log(isText)
    return (
        <>
            <Typography variant="h4" sx={{ color: 'white', display: 'block', my: 2, fontWeight: 'bold' }}>{text}</Typography>
            <Grid container spacing={3} column={12}>
                {
                    isText ? (
                        data?.map((item, i) => i < 4 && <CardText data={item} />)
                    ) : (
                        data?.map((item, i) => i < 6 && <CardMovies data={item} />)
                    )
                }
            </Grid>
        </>
    )
}
