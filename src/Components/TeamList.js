import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowTeams from './ShowTeams.js/ShowTeams.js';

const TeamList = () => {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])

    console.log(teams);
    return (
        <ShowTeams teams={teams}></ShowTeams>
    );
};

export default TeamList;