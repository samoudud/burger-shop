import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import snacks from '../../../images/snacks.png';
import hot from '../../../images/hot-dog.png';
import chicken from '../../../images/chicken.png';
import salad from '../../../images/salad.png';

const Snacks = () => {
    return (
        <div className='Snacks'>
            <Container>
                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <img width='100%' src={snacks} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ color: 'white', fontFamily: 'Proza Libre', fontWeight: 700, fontSize: '58px', WebkitTextStroke: '3px #FFA800', WebkitTextFillColor: 'black', marginBottom: '20px' }} variant="h2" component="div" >
                            SNACKS
                        </Typography>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            HOT DOGS
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
                                        <img width='100%' src={hot} alt="" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            CHICKEN WRAP
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            ৳150
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
                                        <img width='100%' src={chicken} alt="" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            HOUSE SALAD
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            ৳60
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box >
                                <Grid container spacing={6} sx={{ alignItems: 'center', }}>
                                    <Grid item xs={8} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 300, fontSize: '24px' }} variant="h5" component="div" >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} >
                                        <img width='100%' src={salad} alt="" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Snacks;