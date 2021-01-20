import React, {useState} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const NewPlayer = () => {
    const [playerInfo, setPlayerInfo] = useState({
        firstName:"",
        lastName:"",
        ppG:0
    })

    const changeHandler = (e)=>{
        console.log("ohhhhh you typing on an input huh....", e.target.name)
       
        setPlayerInfo({
            ...playerInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = e =>{
        e.preventDefault();
        console.log("OHHHHHHH, so you trynaa submit now huhhh, moving on up i seee")
        console.log(playerInfo)
        Axios.post("http://localhost:8000/api/players/create", playerInfo)
            .then(res=> {
                console.log("response after submitting the axios post request", res)
                if(res.data.results){
                    navigate("/")
                }
                else{
                    console.log("you aint goinnn noo where till you fill this out properlayyy")
                }
                
            })
            .catch(err=> console.log("errors that came up from posting", err))



    }


    return (
        <div>
            <form onSubmit= {submitHandler}>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" onChange={changeHandler} id=""/>
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" onChange={changeHandler} id=""/>
                </div>
                <div>
                    <label htmlFor="">Points per game</label>
                    <input type="number" name="ppG" onChange={changeHandler} id=""/>
                </div>
                <input type="submit" value="Add this player!"/>
            </form>
        </div>
    );
};


export default NewPlayer;