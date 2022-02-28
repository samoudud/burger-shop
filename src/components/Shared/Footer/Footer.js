import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'


const iconStyle = { color: 'white', fontSize: '54px', margin: '0 10px' };
const linkStyle = { textDecoration: 'none', color: 'white', fontSize: '20px', fontWeight: '300' };

const Footer = () => {
    return (
        <div className='Footer'>
            <Container>
                <Box >
                    <img width='200px' src={logo} alt="" />
                    <Typography variant="body1" gutterBottom sx={{ color: '#FFFFFF', fontFamily: 'Prompt', fontSize: '24px', width: '75%', margin: '0 auto' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra a pellentesque consectetur.
                    </Typography>
                    <Box sx={
                        {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '10px 0'
                        }
                    }>
                        <p><i style={iconStyle} class="fa-brands fa-facebook-square"></i></p>
                        <p><i style={iconStyle} class="fa-brands fa-twitter-square"></i></p>
                        <p><i style={iconStyle} class="fa-brands fa-linkedin"></i></p>
                    </Box>
                    <Divider sx={{ background: 'white', border: '1px solid #FFFFFF', marginBottom: '10px' }} />

                    <Box>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '75%' }}>
                                    <Link style={linkStyle} to="/">Home</Link>
                                    <Link style={linkStyle} to="/">About Us </Link>
                                    <Link style={linkStyle} to="/">Menu</Link>
                                    <Link style={linkStyle} to="/">Store</Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" gutterBottom sx={{ color: '#FFFFFF', fontFamily: 'Prompt', fontSize: '20px', fontWeight: '300' }}>
                                    Copyrights © 2022 All Rights Reserved by Burger Boost
                                </Typography>
                            </Grid>

                        </Grid>
                    </Box>


                </Box>
            </Container>
        </div>
    );
};

export default Footer;