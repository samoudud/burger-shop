import React from 'react';
import Banner from '../Banner/Banner';
import Beveraze from '../Beveraze/Beveraze';
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
            <Beveraze></Beveraze>
        </div>
    );
};

export default Home;