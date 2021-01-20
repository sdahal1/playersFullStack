import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {Router, Link} from "@reach/router";
import NewPlayer from './components/NewPlayer';
import PlayerInfo from './components/PlayerInfo';
import EditPlayer from './components/EditPlayer';


function App() {
  return (
    <div className="App">
       <h1>Welcome to the Elite NBA Players club</h1>
       <Link className = "btn btn-primary m-1"to="/new">Add a new player</Link>
       <Link className = "btn btn-secondary m-1"to="/">Home</Link>


      <Router>
      
        <Main path= "/"></Main>
        <NewPlayer path="/new"></NewPlayer>
        <PlayerInfo path="/players/:playerid"></PlayerInfo>
        <EditPlayer path= "/players/edit/:playerid"></EditPlayer>



      </Router>
      
    </div>
  );
}

export default App;
