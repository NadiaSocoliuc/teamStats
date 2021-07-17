const team ={
    _players: [ 
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
          },

          {
            firstName: 'Zlatan',
            lastName: 'Ibrahimovic',
            age: 36
          },

          {
            firstName: 'Andrea',
            lastName: 'Pirlo',
            age: 25
          }    
    ],

    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
          },

          {
            opponent: 'Milan',
            teamPoints: 5,
            opponentPoints: 2
          },

          {
            opponent: 'Juventus',
            teamPoints: 6,
            opponentPoints: 3
          },             
    ],

    get players() {
        return this._players
    },

    get games() {
        return this._games
    },

    addPlayer(firstName, lastName, age) {
        const player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this.players.push(player);
        //this._players = player;
    },

    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        this.games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny',  76);

console.log(team._players);

team.addGame('Real Madrid', 7, 2);
team.addGame('Brcelona', 5, 4);
team.addGame('PSJ', 3, 1);

console.log(team._games);



