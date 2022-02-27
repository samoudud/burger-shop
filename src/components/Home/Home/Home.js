import React from 'react';
import Banner from '../Banner/Banner';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';
import ShopView from '../ShopView/ShopView';
import Snacks from '../Snacks/Snacks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopView></ShopView>
            <Menu></Menu>
            <Burger></Burger>
            <Snacks></Snacks>
        </div>
    );
};

export default Home;