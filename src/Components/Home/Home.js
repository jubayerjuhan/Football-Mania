import React from 'react';
import TeamList from '../TeamList.js';
import './Home.css'
import Header from "./../Header/Header";
const Home = () => {
    return (
        <div>
            <Header text={true}></Header>
            <TeamList></TeamList>
        </div>
    );
};

export default Home;