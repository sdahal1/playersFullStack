const Player = require('../models/player.model')


// def index(request):
//     return something

module.exports.findAllPlayers = (req,res)=>{
    console.log("im trying to find all the players!!!")
    //mongoose comand to retrieve all players from the Player table(collection)
    Player.find()
        .then(allPlayers => res.json({results: allPlayers}) )
        .catch(err=> res.json({errors: err }))
}

module.exports.draftNewPlayer = (req, res)=> {
    console.log("im trying to draffftt some stars here!!!!!")
    Player.create(req.body)
        .then(newPlayer => res.json({results:newPlayer}))
        .catch(err=> res.json(err))
}

module.exports.findOnePlayer = (req,res) =>{
    console.log("player id to find", req.params.playerId)
    Player.findOne({_id: req.params.playerId})
        .then(selectedPlayer => res.json({results: selectedPlayer}))
        .catch(err=> res.json({errors: err }))
}

module.exports.updatePlayer = (req,res) =>{
    // var id = req.params.id;
    // var client = req.body;
    // Client.update({_id: id}, req.body, { runValidators: true }, function(err) {
    //   ....
    // });



    Player.findOneAndUpdate({_id: req.params.playerId}, req.body,
        {
          new: true,
          runValidators: true,
          useFindAndModify:false
        }
        )
        .then(updatedPlayer => res.json({results:updatedPlayer}) )
        .catch(err=> res.json(err))
}


module.exports.deletePlayer = (req,res) =>{
    
    Player.findByIdAndDelete(req.params.playerId)
        .then(deletedPlayer => res.json({results: deletedPlayer}))
        .catch(err=> res.json({errors: err }))
}






