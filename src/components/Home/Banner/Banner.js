import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import burger from '../../../images/Double-beef-burger.png'

const Banner = () => {
    return (
        <div className='banner_container'>
            <Container className='banner_box'>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography sx={{ color: 'white', fontFamily: 'Playball', marginBottom: '10px', fontSize: '48px' }} variant="h4" component="div" >
                                delight Your best
                            </Typography>
                            <Typography sx={{ color: 'white', fontFamily: 'Proza Libre', fontWeight: 700, fontSize: '79px', WebkitTextStroke: '3px #FFA800', WebkitTextFillColor: 'black' }} variant="h2" component="div" >
                                Boost Burger!
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" gutterBottom sx={{ color: '#CDC8C8', margin: '30px 0', fontFamily: 'Prompt', fontSize: '25px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra a pellentesque consectetur.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '75%' }}>
                            <button style={{ color: 'white', background: 'black', border: '3px solid white', textTransform: 'none', padding: '10px 20px', fontWeight: '700', fontSize: '30px', borderRadius: '5px', cursor: 'pointer' }}>See Menu</button>
                            <button style={{ color: 'white', textTransform: 'none', padding: '10px 20px', fontWeight: '700', fontSize: '30px', background: '#FFA800', borderRadius: '5px', cursor: 'pointer', border: '3px solid #FFA800' }}>Order Now</button>


                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img width='100%' src={burger} alt="" />
                    </Grid>


                </Grid>
                <Box>

                </Box>

            </Container>
        </div>
    );
};

export default Banner;