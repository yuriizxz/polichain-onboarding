const fs = require('fs');
const path = require('path');

async function main(){
    const artifactPath = path.join(__dirname, '../artifacts/contracts/Polichain.sol/Polichain.json');
    const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));

    const abi = artifact.abi;

    const content = `// autogerado pelo script extract_abi.js
    export const PolichainABI = ${JSON.stringify(abi,null,2)} as const;
    
    //COLE AQUI O ENDERECO DE DEPLOY:
    export const POLICHAIN_ADDRESS = "SEU_ENDERECO_AQUI" as const;
    `;

    const outputPath = path.join(__dirname, "../lib/contracts.ts")
    fs.mkdirSync(path.dirname(outputPath), { recursive: true});
    fs.writeFileSync(outputPath, content);

    console.log('ABI Extraido para ../lib/contracts.ts');
    console.log('Lembre-se de atualizar o POLICHAIN_ADDRESS');
}

main().catch(console.error);