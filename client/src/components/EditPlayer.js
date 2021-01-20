import React , {useEffect, useState} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const EditPlayer = (props) => {
    const [playerdetails, setPlayerdetails] = useState({
        firstName:"",
        lastName:"",
        ppG:""
    })

    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/players/${props.playerid}`)
            .then(response => {
                console.log("RESPONSE FROM API CALL", response)
                setPlayerdetails(response.data.results)
            })
            .catch()
    },[])
    console.log("********", props.playerid)

    const changeHandler = e =>{
        console.log("ohhhhh you tryin to edit something huhhh")
        setPlayerdetails({
            ...playerdetails,
            [e.target.name]:e.target.value
        })
    }

    const submithandler = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/players/update/${props.playerid}`, playerdetails)
            .then(response => {
                console.log("JUST UPDATED SOMETHANGGG! HERE IS THE RESPONSE", response)
                navigate('/')
            })
            .catch(err=> console.log("ERROR ON TRYIN TO UPDATE", err))
    }

    return (
        <div>
            <h3>Edit a player</h3>
            <form onSubmit= {submithandler}>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" value = {playerdetails.firstName} onChange={changeHandler} id=""/>
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" value = {playerdetails.lastName} onChange={changeHandler} id=""/>
                </div>
                <div>
                    <label htmlFor="">Points per game</label>
                    <input type="number" name="ppG" value = {playerdetails.ppG.$numberDecimal} onChange={changeHandler}id=""/>
                </div>
                <input type="submit" value="Update this player!"/>
            </form>
        </div>
    );
};

export default EditPlayer;