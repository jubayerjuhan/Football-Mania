import { faArrowRight, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './ShowItems.css'
const ShowTeams = ({ teams }) => {
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight}/>
    let history = useHistory();

    const showTeams = (team) => {
        const {strTeam, strTeamBadge, strStadium, idTeam} = team;

        const handleClick = (teamId) => {
            history.push(`/teams/${teamId}`)
        }

        return(
            <div className="col-sm-4" key={idTeam}>
                <div className="cardContainer">
                    <img className="clubLogo" src={strTeamBadge} alt="" />
                    <h3>{strTeam}</h3>
                    <p><small>Home Venue: {strStadium}</small></p>
                    <button onClick={() => handleClick(idTeam)} className='exploreBtn'>
                        <span className='explore'>Explore</span>{arrowIcon}
                    </button>
                </div>
            </div>    
        )
    }

    return (
        <div className="bgChange">
            <div className="row">
                {
                    teams.map((team)=>showTeams(team))
                }
            </div>
        </div>
    );
};

export default ShowTeams;