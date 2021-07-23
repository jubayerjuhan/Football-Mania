import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./../Header/Header";
import './TeamDetails.css'
import TeamImage from '../../Photo/male.png'
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
            { console.log(teamDetail[0])}
            { 
                teamDetail.length &&
                
                <>
                    <Header text={false} logo = {teamDetail[0].strTeamBadge} logoAvailable ={true}></Header>
                    <div className="TeamInfoContainer">
                        <div className="teamInfo">
                            <div className= 'infoText'>
                                <h1>TeamName</h1>
                                <h4>Founded in 9182</h4>
                                <h4>Country:</h4>
                                <h4>Sport Type:</h4>
                                <h4>Gender</h4>
                            </div>
                            <div>
                                <img src={TeamImage} alt="" />
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default TeamDetails;