import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import shop from '../../../images/shop.png'

const ShopView = () => {
    return (
        <div className='ShopView' style={{ margin: '35px 0' }}>
            <Container>
                <Grid container spacing={6} >
                    <Grid item xs={12} md={6}>
                        <img width='100%' src={shop} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ color: '', fontFamily: 'Playball', marginBottom: '10px' }} variant="h4" component="div" >
                            Who is Burger Boost
                        </Typography>
                        <Typography sx={{ color: '#FFA800', fontFamily: 'Playball', marginBottom: '10px', fontSize: '64px' }} variant="h4" component="div" >
                            You Wont Finds Any where Else
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ color: '#746F6F', margin: '30px 0', fontFamily: 'Prompt', fontSize: '25px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra a pellentesque consectetur.
                        </Typography>
                        <button style={{ color: '#000000', background: 'white', border: '3px solid #000000', textTransform: 'none', padding: '10px 20px', fontWeight: '700', fontSize: '30px', borderRadius: '5px', cursor: 'pointer' }}>See Menu</button>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
};

export default ShopView;