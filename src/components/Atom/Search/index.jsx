import { Box, TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
import { useGetMovieBySearchQuery } from '../../../service/Movies';

export default function index({ search, setSearch }) {

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <Box sx={{ backgroundColor: 'white', width: '50%', margin: 'auto', padding: '10px', borderRadius: '20px', mt: 3, mb: 10, fontWeight: 'bold' }}>
            <TextField fullWidth label="Search Movies" id="custom-css-outlined-input" onChange={handleSearch} defaultValue={search} />
        </Box>
    )
}
