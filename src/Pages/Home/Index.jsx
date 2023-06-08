import React from 'react'

import { Nav } from '../../components/Molecule'
import { ImageParallax } from '../../components/Atom'
import CardSection from '../../components/Organism/CardSection'

import { Grid } from '@mui/material'

import './index.css'
import { useGetMovieNowPlayingQuery, useGetMoviePopularQuery, useGetMovieUpcomingQuery } from '../../service/Movies'

export default function Home() {

    const {
        data: dataPopularMovies,
        isLoading: isLoadingPopularMovies,
        isSuccess: isSuccessPopularMovies
    } = useGetMoviePopularQuery()

    const {
        data: dataUpcomingMovies,
        isLoading: isLoadingUpcomingMovies,
        isSuccess: isSuccessUpcomingMovies
    } = useGetMovieUpcomingQuery()

    const {
        data: dataNowPlayingMovies,
        isLoading: isLoadingNowPlayingMovies,
        isSuccess: isSuccessNowPlayingMovies
    } = useGetMovieNowPlayingQuery()

    console.log(dataNowPlayingMovies)

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
                    {
                        !isLoadingPopularMovies && <CardSection text="Popular" data={dataPopularMovies.results} />
                    }
                    {
                        !isLoadingUpcomingMovies && <CardSection text="Upcoming Movies" isText={true} data={dataUpcomingMovies.results} />
                    }
                    {
                        !isLoadingNowPlayingMovies && <CardSection text="Now Playing Movies" data={dataNowPlayingMovies.results} />
                    }

                </Grid>
            </Grid>
        </Grid>
    )
}
