import React from 'react';
import StadiumCover from '../../Photo/2514320.jpg'
import '../Home/Home.css'
const Header = ({text, logoAvailable, logo}) => {
    console.log(logo);
    return (
        <div>
            <div className="header">

                <img className ='headerImg' src={StadiumCover} alt="" />
                <div class="centered">
                    {
                        text && 
                        <h1>Sports Mania</h1>
                    }
                    {
                        logoAvailable && 
                        <img className ='teamLogo'src={logo} alt="" />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;