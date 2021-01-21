import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const PlayerInfo = (props) => {
    console.log("LOGGING PROPS FROM PLAYER INFO COMPONENT!!!", props)
    const [playerdetails, setPlayerdetails] = useState({
        firstName:"",
        lastName:"",
        ppG:""
    })
    
    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/players/${props.playerid}`)
            .then(response => {
                console.log("got back the response from api to find one player", response)
                setPlayerdetails(response.data.results)
            })
            .catch(err=> console.log("ERRORORRR", err))

    }, [])
    return (
        <div>
            <h3>Here is info about this player:</h3>
            <p>Player Id:{ props.playerid}</p>
            <p>Player Name: {playerdetails.firstName} {playerdetails.lastName}</p>
            <p>Points per game: {playerdetails.ppG}</p>
        </div>
    );
};

export default PlayerInfo;