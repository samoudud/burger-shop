import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import beveraze from '../../../images/beveraze.png';
import juice from '../../../images/juice.png';
import cold from '../../../images/cold-coffe.png';

const Beveraze = () => {
    return (
        <div className='Beveraze'>
            <Container>
                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ color: 'white', fontFamily: 'Proza Libre', fontWeight: 700, fontSize: '58px', WebkitTextStroke: '3px #FFA800', WebkitTextFillColor: 'black', marginBottom: '20px' }} variant="h2" component="div" >
                            BEVERAZES
                        </Typography>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            COLD COFFEE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            ৳121
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center', }}>
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 300, fontSize: '24px' }} variant="h5" component="div" >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <img src={cold} alt="" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            FRESH JUICE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            ৳99
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center', }}>
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 300, fontSize: '24px' }} variant="h5" component="div" >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <img src={juice} alt="" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

                        <Box>
                            <Box>
                                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 500, fontSize: '28px' }} variant="h5" component="div" >
                                            CAFE LATTE
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
                                    <Grid item xs={9} >
                                        <Typography sx={{ color: 'white', fontFamily: 'Prompt', fontWeight: 300, fontSize: '24px' }} variant="h5" component="div" >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <img src={cold} alt="" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img width='100%' src={beveraze} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Beveraze;