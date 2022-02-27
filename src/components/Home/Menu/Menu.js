import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Menu = () => {
    return (
        <div className='Menu'>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <div className="burger_menu">
                        <Container>
                            <Typography sx={{ color: 'white', fontFamily: 'Prompt', marginBottom: '10px', fontSize: '38px', fontWeight: '300' }} variant="h4" component="div" >
                                BURGER
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ color: '#FFFFFF', margin: '30px 0', fontFamily: 'Prompt', fontSize: '24px', width: '75%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra a pellentesque consectetur.
                            </Typography>
                            <button style={{ color: 'white', background: 'black', border: '3px solid white', textTransform: 'none', padding: '10px 20px', fontWeight: '300', fontSize: '24px', borderRadius: '5px', cursor: 'pointer' }}>VIEW ALL</button>

                        </Container>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="snacks_menu">
                        <Container>
                            <Typography sx={{ color: 'white', fontFamily: 'Prompt', marginBottom: '10px', fontSize: '38px', fontWeight: '300' }} variant="h4" component="div" >
                                SNACKS
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ color: '#FFFFFF', margin: '30px 0', fontFamily: 'Prompt', fontSize: '24px', width: '75%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra a pellentesque consectetur.
                            </Typography>
                            <button style={{ color: 'white', background: 'black', border: '3px solid white', textTransform: 'none', padding: '10px 20px', fontWeight: '300', fontSize: '24px', borderRadius: '5px', cursor: 'pointer' }}>VIEW ALL</button>

                        </Container>
                    </div>

                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="beveraze_menu">
                        <Container>
                            <Typography sx={{ color: 'white', fontFamily: 'Prompt', marginBottom: '10px', fontSize: '38px', fontWeight: '300' }} variant="h4" component="div" >
                                BEVERAZE
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ color: '#FFFFFF', margin: '30px 0', fontFamily: 'Prompt', fontSize: '24px', width: '75%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra a pellentesque consectetur.
                            </Typography>
                            <button style={{ color: 'white', background: 'black', border: '3px solid white', textTransform: 'none', padding: '10px 20px', fontWeight: '300', fontSize: '24px', borderRadius: '5px', cursor: 'pointer' }}>VIEW ALL</button>

                        </Container>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Menu;