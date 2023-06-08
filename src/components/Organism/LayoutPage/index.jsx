import React from 'react'

import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Nav from '../../Molecule/Nav'


export default function LayoutPage({ children }) {
    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid xs={1} sx={{ backgroundColor: 'black', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Nav />
            </Grid>
            <Grid xs={11}>
                {children}
                <Grid container sx={{ minHeight: '300px', p: 4, color: 'white' }}>
                    <Grid container>
                        <Grid lg={3} sm={6}>
                            <Typography variant='h5' fontWeight='bold'>Company</Typography>
                            <Typography variant='h6' sx={{ mt: 2 }}>Supporter Devices</Typography>
                            <Typography variant='h6' sx={{ mt: 2 }}>Interest based Ads</Typography>
                        </Grid>
                        <Grid lg={3} sm={6}>
                            <Typography variant='h5' fontWeight='bold'>View Website in</Typography>
                            <Typography variant='h6' sx={{ mt: 2 }}>English</Typography>
                            <Typography variant='h6' sx={{ mt: 2 }}>Indonesian</Typography>
                        </Grid>
                        <Grid lg={3} sm={6}>
                            <Typography variant='h5' fontWeight='bold'>Need Help?</Typography>
                            <Typography variant='h6' sx={{ mt: 2 }}>Help</Typography>
                            <Typography variant='h6' sx={{ mt: 2 }}>Feedback</Typography>
                        </Grid>
                        <Grid lg={3} sm={6}>
                            <Typography variant='h5' fontWeight='bold' sx={{ mb: 3 }}>Connect with Us</Typography>
                            <Stack direction='row' spacing={5}>
                                <FacebookIcon fontSize='large' />
                                <TwitterIcon fontSize='large' />
                                <InstagramIcon fontSize='large' />
                                <YouTubeIcon fontSize='large' />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container column={12}>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                            Copyright Krisna Sanjaya Disney Hotstar web.
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'right' }}>
                            <img src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore' style={{ maxHeight: '70px' }} />
                            <img src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore' style={{ maxHeight: '70px' }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}
