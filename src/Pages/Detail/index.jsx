import React, { useEffect, useState } from 'react'

import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';

import { CardDetails, CardMovies } from '../../components/Molecule/Card';
import Nav from '../../components/Molecule/Nav';

import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../service/Movies';
import LayoutPage from '../../components/Organism/LayoutPage';

export default function Detail() {

    const [fav, setFav] = useState(null)

    const { id } = useParams();

    const {
        data: dataMovies,
        isLoading: isLoadingMovies,
        isSuccess: isSuccessMovies
    } = useGetMovieByIdQuery(id)
    console.log(dataMovies)

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
        console.log(data)
        const genre = data?.map(item => item.name)
        return (
            <TextDetail variant='h5' externalStyle={{ mt: 2 }}>{genre.join(' | ')}</TextDetail>
        )
    }

    const handleAddFavorite = (data) => {
        const ls = JSON.parse(localStorage.getItem('favorite')) ?? []
        ls.push(data)
        localStorage.setItem('favorite', JSON.stringify(ls))
        checkFav()
    }

    const handleDeleteFavorite = () => {
        const ls = JSON.parse(localStorage.getItem('favorite')) ?? []
        const newData = ls.filter(item => item.id !== dataMovies.id)
        localStorage.setItem('favorite', JSON.stringify(newData))
        checkFav()
    }

    const checkFav = () => {
        const ls = JSON.parse(localStorage.getItem('favorite')) ?? []
        const isFav = ls.filter(item => item.id === dataMovies.id)
        isFav.length === 0 ? setFav(false) : setFav(true)
    }

    useEffect(() => {
        let flag = true

        if (flag && !isLoadingMovies) {
            checkFav()
        }

        return () => {
            flag = false
        }
    }, [isLoadingMovies])

    return (
        <LayoutPage>
            <Grid container sx={{ backgroundColor: 'black', py: 4, display: 'flex', flexDirection: 'row', height: '100vh' }} spacing={10}>
                {
                    !isLoadingMovies && (
                        <>
                            <Grid item xs={12} lg={6} sx={{ justifyContent: { xs: 'center', lg: 'right' }, display: 'flex', alignItems: 'center' }}>
                                <CardDetails data={dataMovies?.poster_path} />
                            </Grid>
                            <Grid item xs={12} lg={6} sx={{ justifyContent: { xs: 'center', lg: 'left' }, display: 'flex', alignItems: { lg: 'center', xs: 'start' } }}>
                                <Box sx={{ width: '75%', height: '50%', padding: 0, display: 'flex', justifyContent: 'center', textAlign: { xs: 'center', lg: 'left' }, flexDirection: 'column', mt: 8 }}>
                                    <TextDetail variant="h4">{dataMovies?.title}</TextDetail>
                                    <TextRelease year={dataMovies?.release_date.split('-')[0]} season='2' origin={dataMovies?.spoken_languages[0]?.english_name} />
                                    <TextDetail externalStyle={{ mt: 2, fontWeight: 300 }} variant="h5">{dataMovies?.overview}</TextDetail>
                                    <TextGenre data={dataMovies?.genres} />
                                    <Button onClick={() => fav ? handleDeleteFavorite() : handleAddFavorite(dataMovies)} sx={{ mt: 5, textDecoration: 'none', color: 'white', px: 0, justifyContent: { xs: 'center', lg: 'left' } }}>
                                        {
                                            fav ? 'Delete from Favorite' : 'Add to Favorite'
                                        }
                                    </Button>
                                </Box>
                            </Grid>
                        </>
                    )
                }
            </Grid>
        </LayoutPage>
    )
}
