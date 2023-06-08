import React, { useEffect, useState } from 'react'

import { Box, Grid, TextField } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';

import CardSection from '../../components/Organism/CardSection';


import { CardMovies } from '../../components/Molecule/Card';
import Nav from '../../components/Molecule/Nav';
import { ImageParallax, Search } from '../../components/Atom';
import { useGetMovieBySearchQuery } from '../../service/Movies';

export default function Gallery() {

    const [search, setSearch] = useState('')

    const {
        data: dataMovies,
        isLoading: isLoadingMovies,
        isSuccess: isSuccessMovies
    } = useGetMovieBySearchQuery(search)

    console.log(dataMovies)

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
                        <Search setSearch={setSearch} search={search} />
                        {
                            !isLoadingMovies && <CardSection text={"Your Search"} data={dataMovies.results} max={20} />
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
