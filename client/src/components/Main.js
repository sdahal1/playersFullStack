import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link} from "@reach/router";


const Main = () => {
    //if i want it to run some function upon rendering of this component, i want to use useEffect
    const [allplayers, setallplayers] = useState([])

    const [deleteClicked, setDeleteClicked] = useState(false)
    

    useEffect(()=>{
        Axios.get("http://localhost:8000/api/players")
           .then(response => {
               console.log("*************", response)
            //    var items = [
            //     { name: 'Edward', value: 21 },
            //     { name: 'Sharpe', value: 37 },
            //     { name: 'And', value: 45 },
            //     { name: 'The', value: -12 },
            //     { name: 'Magnetic', value: 13 },
            //     { name: 'Zeros', value: 37 }
            //   ];
              
              // sort by value
              response.data.results.sort(function (a, b) {
                return a.ppG - b.ppG;
              });
              
               setallplayers(response.data.results)
           })
           .catch(err=> console.log(err)) 
    },[deleteClicked])

    const deleteClickHandler = (e,playerid)  =>{
        console.log("OHHHHH, YOU tryinnnaa cut a player from the squaddd huhh", playerid)
        Axios.delete(`http://localhost:8000/api/players/destroy/${playerid}`)
            .then(response => {
                console.log("JUST DELETED SOMEBODY!", response)
                setDeleteClicked(!deleteClicked)
            })
            .catch(err=> console.log(err))
    }
    return (
        <div>
           
            <table className = "table table-danger col-8 mx-auto">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>PPG</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allplayers.map((player,i)=>{
                            return <tr key = {i}>

                                        <td>{player.firstName}</td>
                                        <td>{player.lastName}</td>
                                        <td>{player.ppG}</td>
                                        <td>
                                            <Link className = "btn btn-info m-1" to = {`/players/${player._id}`}>View Player</Link>
                                            <Link className = "btn btn-info m-1" to = {`/players/edit/${player._id}`}>Edit Player</Link>
                                            <button onClick={(e)=>deleteClickHandler(e,player._id)} className = "btn btn-info m-1" >Delete Player</button>
                                            {/* <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button> */}

                                        
                                        
                                        </td>

                                    </tr>
                        })
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default Main;