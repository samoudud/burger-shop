import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Beveraze from '../Beveraze/Beveraze';
import Burger from '../Burger/Burger';
import Contact from '../Contact/Contact';
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
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;