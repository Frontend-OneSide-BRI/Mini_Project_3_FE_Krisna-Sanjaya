import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled } from '@mui/material/styles';

import { Button } from '@mui/material';

export default function ButtonNav({ isHome = true }) {

    const Item = styled(Button)(({ theme }) => ({
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            {
                isHome ? (
                    <Item href="/home">
                        <HomeOutlinedIcon sx={{ color: 'white' }} />
                    </Item >
                ) : (
                    <Item href='/gallery'>
                        <SearchOutlinedIcon sx={{ color: 'white' }} />
                    </Item>
                )
            }
        </>

    )
}
