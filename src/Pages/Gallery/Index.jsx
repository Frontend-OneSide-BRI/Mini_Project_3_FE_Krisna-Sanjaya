import React, { useEffect, useState } from 'react'

import { Box, Grid, Skeleton, TextField } from '@mui/material'

import { ImageParallax, PaginationCard, Search } from '../../components/Atom';
import { CardSection, LayoutPage } from '../../components/Organism';

import { useGetMovieBySearchQuery } from '../../service/Movies';



export default function Gallery() {

    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    const {
        data: dataMovies,
        isLoading: isLoadingMovies,
        isSuccess: isSuccessMovies
    } = useGetMovieBySearchQuery({
        query: search,
        page: page
    })

    const handleChange = (event, value) => {
        setPage(value);
    };

    console.log(dataMovies)

    return (
        <LayoutPage>
            <Grid container sx={{ width: '100%' }}>
                <ImageParallax />
            </Grid>
            <Grid container sx={{ backgroundColor: 'black', py: 4, display: 'flex', flexDirection: 'column' }}>
                <Search setSearch={setSearch} search={search} />
                {
                    !isLoadingMovies && search ? (
                        <>
                            <CardSection text={"Your Search"} data={dataMovies.results} max={20} />
                            <PaginationCard page={page} handleChange={handleChange} total={dataMovies.total_pages} />
                        </>
                    ) : isLoadingMovies ? (
                        <Grid container sx={{ height: { lg: '40vh', xs: '140vh' } }} spacing={3}>
                            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ mb: 2 }}>
                                <Skeleton animation='wave' variant="rounded" sx={{ height: '100%', width: '100%', backgroundColor: 'white' }} />
                            </Grid >
                            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ mb: 2 }}>
                                <Skeleton animation='wave' variant="rounded" sx={{ height: '100%', width: '100%', backgroundColor: 'white' }} />
                            </Grid >
                            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ mb: 2 }}>
                                <Skeleton animation='wave' variant="rounded" sx={{ height: '100%', width: '100%', backgroundColor: 'white' }} />
                            </Grid >
                            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ mb: 2 }}>
                                <Skeleton animation='wave' variant="rounded" sx={{ height: '100%', width: '100%', backgroundColor: 'white' }} />
                            </Grid >
                            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ mb: 2 }}>
                                <Skeleton animation='wave' variant="rounded" sx={{ height: '100%', width: '100%', backgroundColor: 'white' }} />
                            </Grid >
                            <Grid item xs={12} sm={6} md={4} lg={2} sx={{ mb: 2 }}>
                                <Skeleton animation='wave' variant="rounded" sx={{ height: '100%', width: '100%', backgroundColor: 'white' }} />
                            </Grid >
                        </Grid>
                    ) : ''
                }
            </Grid>
        </LayoutPage>
    )
}
