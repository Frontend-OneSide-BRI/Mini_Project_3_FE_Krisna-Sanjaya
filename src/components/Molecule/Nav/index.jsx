import React from 'react'

import { Box, Stack } from '@mui/material';
import { ButtonNav } from '../../Atom';


export default function Nav() {
    return (
        <Box sx={{ position: 'fixed' }}>
            <Stack spacing={5}>
                <ButtonNav type='home' />
                <ButtonNav type='gallery' />
                <ButtonNav type='favorite' />
                <ButtonNav type='logout' />
            </Stack>
        </Box>
    )
}
