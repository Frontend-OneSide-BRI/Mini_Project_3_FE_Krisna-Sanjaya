import React from 'react'

import { Box, Stack } from '@mui/material';
import ButtonNav from '../../Atom/ButtonNav';

export default function Nav() {
    return (
        <Box sx={{ position: 'fixed' }}>
            <Stack spacing={5}>
                <ButtonNav />
                <ButtonNav isHome={false} />
            </Stack>
        </Box>
    )
}
