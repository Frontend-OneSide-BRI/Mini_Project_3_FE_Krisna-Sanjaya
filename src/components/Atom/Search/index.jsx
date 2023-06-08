import { Box, TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components';

export default function index() {

    const CssTextField = styled(TextField)({
        border: '1px solid transparent',
        width: '100%',
        '& label.Mui-focused': {
            color: '#A0AAB4',
            border: '1px solid transparent',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
            border: '1px solid transparent',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E0E3E7',
                border: '1px solid transparent',
            },
            '&:hover fieldset': {
                borderColor: '#B2BAC2',
                border: '1px solid transparent',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#6F7E8C',
                border: '1px solid transparent',
            },
        },
    });

    return (
        <Box sx={{ backgroundColor: 'white', width: '50%', margin: 'auto', padding: '10px', borderRadius: '20px', mt: 3, mb: 10, fontWeight: 'bold' }}>
            <CssTextField label="Search Movies" id="custom-css-outlined-input" />
        </Box>
    )
}
