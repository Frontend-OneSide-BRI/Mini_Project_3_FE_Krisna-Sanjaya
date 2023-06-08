import React from 'react'

import { Nav } from '../../components/Molecule'
import { ImageParallax } from '../../components/Atom'
import { CardSection, LayoutPage } from '../../components/Organism'

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
        <LayoutPage>
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
        </LayoutPage>
    )
}
