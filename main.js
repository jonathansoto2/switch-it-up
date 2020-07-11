function askForNames(){

    const teamQuantity = document.getElementById("team-quantity").value;
    const playersPerTeam = document.getElementById("players-per-team").value;
    var totalPlayers = teamQuantity * playersPerTeam;
    document.getElementById("next-step-btn").classList.add("disabled");
    if(isNaN(teamQuantity) == true || isNaN(playersPerTeam) == true){
        document.getElementById("number-error").innerHTML = "Enter valid numbers";
    }else if(isNaN(teamQuantity)== false && isNaN(playersPerTeam) == false){
        document.getElementById("number-error").innerHTML = "";
        // create inputs that are equal to the total players
        for(var i = 1; i < totalPlayers + 1; i++){
            var newPlayer = document.createElement("P");
            newPlayer.innerHTML = "Player " + i;
            document.getElementById("players-form").appendChild(newPlayer);

            var newPlayerInput = document.createElement("input");
            newPlayerInput.id = "new-player-" + i;
            document.getElementById("players-form").appendChild(newPlayerInput);

            console.log(i);
        }
        var newBTN = document.createElement("input");
        newBTN.type = "button";
        newBTN.classList.add("waves-effect","waves-light","btn");
        newBTN.value = "Generate Teams!";
        document.getElementById("players-form").appendChild(newBTN);

        var restartBTN = document.createElement("input");
        restartBTN.type = "button";
        restartBTN.classList.add("waves-effect","waves-light","btn", "move-left");
        restartBTN.value = "Restart";
        document.getElementById("players-form").appendChild(restartBTN);

        newBTN.onclick = function(){
            console.log("Generating teams...");
            newBTN.classList.add("disabled");
            var playerList = [];

            var reshuffle = document.createElement("input");
            reshuffle.type = "button";
            reshuffle.classList.add("waves-effect","waves-light","btn", "move-left");
            reshuffle.value = "Reshuffle teams";
            document.getElementById("players-form").appendChild(reshuffle);

            //add players to the list
            for(var i = 0; i < totalPlayers; i++){
                playerList.push(document.getElementById("new-player-" + (i + 1)).value);
            }
            shuffle(playerList);
            for(var j = 0; j < teamQuantity; j++){
                var newTeam = document.createElement("div");
                newTeam.id = "Team-" + j;
                document.getElementById("team-section").appendChild(newTeam);
                var newTeamTitle = document.createElement("H1");
                newTeamTitle.innerHTML = "Team " + (j + 1);
                document.getElementById("Team-" + j).appendChild(newTeamTitle);
                for(var i = 0; i < playersPerTeam; i++){
                    //create an elem P
                    var setPlayer = document.createElement("P");
                    //set elem P to List[random number]
                    setPlayer.innerHTML = playerList.pop();
                    //append to dom
                    document.getElementById("Team-" + j).appendChild(setPlayer);
                }
            }   
            
            reshuffle.onclick = function(){
                document.getElementById('team-section').classList.add('hidden');
                reshuffleList = [];
                for(var i = 0; i < totalPlayers; i++){
                    reshuffleList.push(document.getElementById("new-player-" + (i + 1)).value);
                }
                shuffle(reshuffleList);
                for(var j = 0; j < teamQuantity; j++){
                    var newnewTeam = document.createElement("div");
                    newnewTeam.id = "New Team-" + j;
                    document.getElementById("new-team-section").appendChild(newnewTeam);
                    var newnewTeamTitle = document.createElement("H1");
                    newnewTeamTitle.innerHTML = "New Team " + (j + 1);
                    document.getElementById("New Team-" + j).appendChild(newnewTeamTitle);
                    for(var i = 0; i < playersPerTeam; i++){
                        //create an elem P
                        var newsetPlayer = document.createElement("P");
                        //set elem P to List[random number]
                        newsetPlayer.innerHTML = reshuffleList.pop();
                        //append to dom
                        document.getElementById("New Team-" + j).appendChild(newsetPlayer);
                    }
                }   
                reshuffle.classList.add("disabled");
            }
            console.log(playerList);


// initial thought
// when generate team btn is clicked => add each value to an array
// create a title for the first team in team quantity
// randomly select a value from the list
// remove the selected value
//continue

            //get the value of all created inputs

            //randomly pair them accoding to team quantity


        }

        restartBTN.onclick = function(){
            location.reload();
        }

    } 
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }