import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'

export default function Login() {
    return (
        <Grid container sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ backgroundColor: 'white', width: '40%', height: '40%', borderRadius: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <TextField id="outlined-basic" label="Username" variant="outlined" sx={{ width: '60%', mb: 3 }} />
                <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ width: '60%', mb: 5 }} />
                <Button variant='contained' sx={{ backgroundColor: 'black' }} href="/home">Login</Button>
            </Box>
        </Grid>
    )
}
