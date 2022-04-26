function gameObject() {
    return {   
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: 
            {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}
function numPointsScored(name) {
    const obj = gameObject();
    const homePlayers = Object.keys(obj["home"]["players"])
    const awayPlayers = Object.keys(obj["away"]["players"])
    for (let i = 0; i < homePlayers.length; i++) {
        if (name === homePlayers[i]) {
            return obj["home"]["players"][name]["points"];
        }
        else if (name === awayPlayers[i]) {
            return obj["away"]["players"][name]["points"]
        }
        else {
            return "Player doesn't exist."
        }
    }
}
function shoeSize(name) {
    const obj = gameObject();
    const homePlayers = Object.keys(obj["home"]["players"])
    const awayPlayers = Object.keys(obj["away"]["players"])
    for (let i = 0; i < homePlayers.length; i++) {
        if (name === homePlayers[i]) {
            return obj["home"]["players"][name]["shoe"];
        }
        else if (name === awayPlayers[i]) {
            return obj["away"]["players"][name]["shoe"]
        }
        else {
            return "Player doesn't exist."
        }
    }
}
function teamColors(team) {
    const obj = gameObject();
    const homeTeam = obj["home"]["teamName"];
    const awayTeam = obj["away"]["teamName"];
    if (team === homeTeam) {
        return obj["home"]["colors"];
    }
    else if (team === awayTeam) {
        return obj["away"]["colors"];
    }
    else {
        return "Team doesn't exist."
    }
}
function teamNames(team) {
    const obj = gameObject();
    return [obj["home"]["teamName"],obj["away"]["teamName"]];
}
function playerNumbers(team) {
    const obj = gameObject();
    const playerNums = []
    const homeTeam = obj["home"]["teamName"];
    const awayTeam = obj["away"]["teamName"];
    if (team === homeTeam) {
        const playerNames = Object.keys(obj["home"]["players"]);
        for (let i = 0; i < playerNames.length; i++) {
            playerNums.push(obj["home"]["players"][playerNames[i]]["number"]);
        }
        return playerNums;
    }
    else if (team === awayTeam) {
        const playerNames = Object.keys(obj["away"]["players"]);
        for (let i = 0; i < playerNames.length; i++) {
            playerNums.push(obj["away"]["players"][playerNames[i]]["number"]);
        }
        return playerNums;
    }
    else {
        return "No such team name."
    }
}
function playerStats(name) {
    const obj = gameObject();
    const homePlayers = Object.keys(obj["home"]["players"])
    const awayPlayers = Object.keys(obj["away"]["players"])
    for (let i = 0; i < homePlayers.length; i++) {
        if (name === homePlayers[i]) {
            return obj["home"]["players"][name];
        }
        else if (name === awayPlayers[i]) {
            return obj["away"]["players"][name];
        }
        else {
            return "Player doesn't exist.";
        }
    }
}
function bigShoeRebounds() {
    const obj = gameObject();
    const homePlayers = Object.keys(obj["home"]["players"]);
    const homeBigShoes = [];
    for (let i = 0; i < homePlayers.length; i++) {
        homeBigShoes.push(obj["home"]["players"][homePlayers[i]]["shoe"]);
    }
    const homeBigShoe = Math.max(...homeBigShoes);
    const awayPlayers = Object.keys(obj["away"]["players"]);
    const awayBigShoes = [];
    for (let i = 0; i < awayPlayers.length; i++) {
        awayBigShoes.push(obj["away"]["players"][awayPlayers[i]]["shoe"]);
    }
    const awayBigShoe = Math.max(...awayBigShoes);
    if (homeBigShoe > awayBigShoe) {
        const bigShoeIndex = homeBigShoes.indexOf(homeBigShoe);
        return obj["home"]["players"][homePlayers[bigShoeIndex]]["rebounds"];
    }
    else if (homeBigShoe < awayBigShoe) {
        const bigShoeIndex = awayBigShoes.indexOf(awayBigShoe);
        return obj["away"]["players"][awayPlayers[bigShoeIndex]]["rebounds"];
    }
    else {
        return "Too many big shoes."
    }
}
function mostPointsScored() {
    const obj = gameObject();
    const homePlayers = Object.keys(obj["home"]["players"]);
    const homeScores = [];
    for (let i = 0; i < homePlayers.length; i++) {
        homeScores.push(obj["home"]["players"][homePlayers[i]]["points"]);
    }
    const homeBigScore = Math.max(...homeScores);
    const awayPlayers = Object.keys(obj["away"]["players"]);
    const awayScores = [];
    for (let i = 0; i < awayPlayers.length; i++) {
        awayScores.push(obj["away"]["players"][awayPlayers[i]]["points"]);
    }
    const awayBigScore = Math.max(...awayScores);
    if (homeBigScore > awayBigScore) {
        const bigScoreIndex = homeScores.indexOf(homeBigScore);
        return obj["home"]["players"][homePlayers[bigScoreIndex]]["points"];
    }
    else if (homeBigScore < awayBigScore) {
        const bigScoreIndex = awayScores.indexOf(awayBigScore);
        return obj["away"]["players"][awayPlayers[bigScoreIndex]]["points"];
    }
    else {
        return "Too many big points."
    }
}
function winningTeam() {
    const obj = gameObject();
    const homePlayers = Object.keys(obj["home"]["players"]);
    let homeScoreTotal = 0;
    for (let i = 0; i < homePlayers.length; i++) {
        homeScoreTotal += obj["home"]["players"][homePlayers[i]]["points"];
    }
    const awayPlayers = Object.keys(obj["away"]["players"]);
    let awayScoreTotal = 0;
    for (let i = 0; i < awayPlayers.length; i++) {
        awayScoreTotal += obj["away"]["players"][awayPlayers[i]]["points"];
    }
    if (homeScoreTotal > awayScoreTotal) {
        return `${obj["home"]["teamName"]} wins!`;
    }
    else if (awayScoreTotal > homeScoreTotal) {
        return `${obj["away"]["teamName"]} wins!`;
    }
    else {
        return "It's a draw :(";
    }
}
function playerWithLongestName() {
    const obj = gameObject();
    const homePlayers = Object.keys(obj["home"]["players"]);
    let homePlayerNameLength = [];
    for (let i = 0; i < homePlayers.length; i++) {
        homePlayerNameLength.push(homePlayers[i].length);
    }
    const awayPlayers = Object.keys(obj["away"]["players"]);
    let awayPlayerNameLength = [];
    for (let i = 0; i < awayPlayers.length; i++) {
        awayPlayerNameLength.push(awayPlayers[i].length);
    }
    const homeMaxName = Math.max(...homePlayerNameLength);
    console.log(homeMaxName);
    const awayMaxName = Math.max(...awayPlayerNameLength);
    console.log(awayMaxName);
    if (homeMaxName > awayMaxName) {
        const maxNameIndex = homePlayerNameLength.indexOf(homeMaxName);
        return homePlayers[maxNameIndex];
    }
    else if (homeMaxName < awayMaxName) {
        const maxNameIndex = awayPlayerNameLength.indexOf(awayMaxName);
        return awayPlayers[maxNameIndex];
    }
    else {
        return "Too many long names."
    }
}
console.log(numPointsScored("Alan Anderson")); //22
console.log(shoeSize("Alan Anderson")); //16
console.log(teamColors("Brooklyn Nets")); // ["Black","White"]
console.log(teamNames());
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerStats("Alan Anderson"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());