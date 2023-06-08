import React from 'react'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export default function ButtonNav({ type }) {

    const Item = styled(Button)(({ theme }) => ({
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            {
                type === 'home' ? (
                    <Item href="/home">
                        <HomeOutlinedIcon sx={{ color: 'white' }} />
                    </Item >
                ) : type === 'gallery' ? (
                    <Item href='/gallery'>
                        <SearchOutlinedIcon sx={{ color: 'white' }} />
                    </Item >
                ) : (
                    <Item href='/login'>
                        <LogoutIcon sx={{ color: 'white' }} />
                    </Item >
                )
            }
        </>

    )
}
