// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Polichain {

address public owner;
uint256 public itemCont;

struct Game{
    uint256 id;
    string championName;
    string role;
    uint256 kills;
    uint256 deaths;
    uint256 assists;
    bool result;
}

Game[] public games;

function createGame(
    string memory _championName,
    string memory _role,
    uint256 _kills,
    uint256 _deaths,
    uint256 _assists,
    bool _result
) external {
    uint256 novoId = games.length;
    games.push(Game(novoId, _championName, _role, _kills, _deaths, _assists, _result));
    itemCont = games.length; 
}

function updateGame(
    uint256 novoId,
    string memory _championName,
    string memory _role,
    uint256 _kills,
    uint256 _deaths,
    uint256 _assists,
    bool _result
) external {
    require(novoId < games.length, "partida nao existe");
    games[novoId] = Game(novoId, _championName, _role, _kills, _deaths, _assists, _result);
}

function CalculaWinKda ( uint256 numeroPartidas) public view returns(uint256 winrate, uint256 kda){ 
    require ( numeroPartidas > 0, "Quantidade de partidas invalida");
    uint256 totalVitorias = 0;
    uint256 totalKills = 0;
    uint256 totalDeaths = 0;
    uint256 totalAssists = 0;

    for (uint256 i = 0; i < numeroPartidas; i++ )
    {
        if (games[i].result) 
        {
            totalVitorias++;
        }
        totalKills += games[i].kills;
        totalDeaths += games[i].deaths;
        totalAssists += games[i].assists;
    }


winrate = (totalVitorias * 100)/numeroPartidas;

if ( totalDeaths == 0){
    kda = totalKills + totalAssists;
}
else{
    kda = (totalKills + totalAssists) / totalDeaths;
}

return (winrate, kda);
}
}
