import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./../Header/Header";
import './TeamDetails.css';
import TeamImage from '../../Photo/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Facebook from '../../Icon/Facebook.png'
import Twitter from '../../Icon/Twitter.png'
import YouTube from '../../Icon/YouTube.png'

import { faFlag, faFutbol, faMapMarkedAlt, faVenusMars } from '@fortawesome/free-solid-svg-icons';

const TeamDetails = () => {
    const { teamId } = useParams()
    console.log(teamId)

    const [teamDetail, setTeamDetail] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then((response) => response.json())
            .then(data => setTeamDetail(data.teams))
    }, [teamId])

    console.log(teamDetail[0]);





    return (
        <div>
            {console.log(teamDetail[0])}
            {
                teamDetail.length &&

                <>
                    <div style={{background_color: 'purple'}}>
                    <Header text={false} logo={teamDetail[0].strTeamBadge} logoAvailable={true}></Header>

                    <div className="TeamInfoContainer">
                        <div className="teamInfo">
                            <div className='infoText'>
                                <h1>{teamDetail[0].strTeam}</h1>
                                <p><FontAwesomeIcon icon={faMapMarkedAlt} /> Home Venue: {teamDetail[0].strStadium}</p>
                                <p><FontAwesomeIcon icon={faFutbol} /> Sports Type:  {teamDetail[0].strSport}</p>
                                <p><FontAwesomeIcon icon={faFlag} /> Country: {teamDetail[0].strCountry}</p>
                                <p><FontAwesomeIcon icon={faVenusMars} /> Gender: {teamDetail[0].strGender}</p>
                            </div>
                            <div>
                                <img src={TeamImage} alt="" />
                            </div>
                        </div>
                        <div className="TeamDes">
                           <p>{teamDetail[0].strDescriptionEN}</p>
                        </div>

                        <div className="SocialMedia">
                            <a href={teamDetail[0].strFacebook}><img src={Facebook} alt="" /></a>
                            <a href={teamDetail[0].strTwitter}><img src={Twitter} alt="" /></a>
                            <a href={teamDetail[0].strYoutube}><img src={YouTube} alt="" /></a>
                        </div>
                    </div>
                    </div>
                </>
            }
        </div>
    );
};

export default TeamDetails;