// autogerado pelo script extract_abi.js
    export const PolichainABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "numeroPartidas",
        "type": "uint256"
      }
    ],
    "name": "CalculaWinKda",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "winrate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "kda",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_championName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_role",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_kills",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_deaths",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_assists",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_result",
        "type": "bool"
      }
    ],
    "name": "createGame",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "games",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "championName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "role",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "kills",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deaths",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assists",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "result",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "itemCont",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "novoId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_championName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_role",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_kills",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_deaths",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_assists",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_result",
        "type": "bool"
      }
    ],
    "name": "updateGame",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
    
    //COLE AQUI O ENDERECO DE DEPLOY:
    export const POLICHAIN_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3" as const;
    