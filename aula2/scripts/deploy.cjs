const hre = require("hardhat");

async function main() 
{
    console.log("Fazendo deploy do contrato polichain. . .");
    
    const Polichain = await hre.ethers.getContractFactory("Polichain");
    const polichain = await Polichain.deploy();

    await polichain.waitForDeployment();

    const address = await polichain.getAddress();
    
    console.log(`Polichain deployed on: ${address}`);

    console.log(`\n COPIE ESTE ENDERECO: ${address}`);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});