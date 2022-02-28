import { Container, Grid, Typography } from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';

const Contact = () => {
    return (
        <div className='Contact'>
            <Container>
                <Grid container spacing={10} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: '20px 0' }}>
                            <Typography sx={{ color: '#FFA800', fontFamily: 'Playball', fontWeight: 400, fontSize: '28px' }} variant="h5" component="div" >
                                Address:
                            </Typography>
                            <Typography sx={{ color: '#FFFFFF', fontFamily: 'Playball', fontWeight: 400, fontSize: '28px' }} variant="h5" component="div" >
                                Munshi Market, Main Bazar , Kotchandpur, Jhenaidah, Bangladesh7.
                            </Typography>
                        </Box>
                        <Box sx={{ padding: '20px 0' }}>
                            <Typography sx={{ color: '#FFA800', fontFamily: 'Playball', fontWeight: 400, fontSize: '28px' }} variant="h5" component="div" >
                                Phone Number:
                            </Typography>
                            <Typography sx={{ color: '#FFFFFF', fontFamily: 'Playball', fontWeight: 400, fontSize: '28px' }} variant="h5" component="div" >
                                (+88) 01732-348009
                            </Typography>
                        </Box>
                        <Box sx={{ padding: '20px 0' }}>
                            <Typography sx={{ color: '#FFA800', fontFamily: 'Playball', fontWeight: 400, fontSize: '28px' }} variant="h5" component="div" >
                                Email:
                            </Typography>
                            <Typography sx={{ color: '#FFFFFF', fontFamily: 'Playball', fontWeight: 400, fontSize: '28px' }} variant="h5" component="div" >
                                info@boost-burger.com
                            </Typography>
                        </Box>
                        <Box sx={{ padding: '20px 0' }}>
                            <Typography sx={{ color: '#FFA800', fontFamily: 'Playball', fontWeight: 400, fontSize: '28px' }} variant="h5" component="div" >
                                Time:
                            </Typography>
                            <Typography sx={{ color: '#FFFFFF', fontFamily: 'Playball', fontWeight: 400, fontSize: '28px' }} variant="h5" component="div" >
                                10:00am - 11:00pm
                            </Typography>
                            <Typography sx={{ color: '#FFFFFF', fontFamily: 'Playball', fontWeight: 400, fontSize: '28px' }} variant="h5" component="div" >
                                MONDAY CLOSED
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box >
                            <input style={{ background: 'rgba(0,0,0,0.5)', padding: '10px', width: '65%', color: '#DAD2D2', fontSize: '28px', fontFamily: 'Playball', margin: '15px 0', border: '4px solid #FFFFFF', borderRadius: '10px' }} type="text" placeholder='enter your name' /> <br />
                            <input style={{ background: 'rgba(0,0,0,0.5)', padding: '10px', width: '65%', color: '#DAD2D2', fontSize: '28px', fontFamily: 'Playball', margin: '15px 0', border: '4px solid #FFFFFF', borderRadius: '10px' }} type="text" placeholder='enter your e-mail' /> <br />
                            <textarea name="" id="" cols="10" rows="5" style={{ background: 'rgba(0,0,0,0.5)', padding: '10px', width: '65%', color: '#DAD2D2', fontSize: '28px', fontFamily: 'Playball', margin: '15px 0', border: '4px solid #FFFFFF', borderRadius: '10px' }} placeholder="enter your messege"></textarea>
                            <button style={{ background: 'rgba(0,0,0,0.5)', padding: '10px', width: '65%', color: '#DAD2D2', fontSize: '28px', fontFamily: 'Prompt', margin: '15px 0', border: '4px solid #FFFFFF', borderRadius: '10px' }}>SEND MESSEGE</button>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Contact;