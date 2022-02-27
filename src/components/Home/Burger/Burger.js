import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import burger from '../../../images/burger.png';
import mini from '../../../images/mini-burger.png';
const Burger = () => {
    return (
        <div className='Burger'>
            <Container>
                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ color: 'white', fontFamily: 'Proza Libre', fontWeight: 700, fontSize: '58px', WebkitTextStroke: '3px #FFA800', WebkitTextFillColor: 'black', marginBottom: '10px' }} variant="h2" component="div" >
                            BURGER
                        </Typography>
                        <Box>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            MINI BURGER
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            ৳38
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center', }}>
                                    <Grid item xs={8} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 300, fontSize: '24px' }} variant="h5" component="div" >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} >
                                        <img src={mini} alt="" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            DOUBLE SIZE BURGER
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            ৳38
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center', }}>
                                    <Grid item xs={8} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 300, fontSize: '24px' }} variant="h5" component="div" >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} >
                                        <img src={mini} alt="" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            TURKISH BURGER
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            ৳38
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center', }}>
                                    <Grid item xs={8} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 300, fontSize: '24px' }} variant="h5" component="div" >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} >
                                        <img src={mini} alt="" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={burger} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Burger;