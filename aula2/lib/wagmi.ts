import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia, hardhat } from 'wagmi/chains';

/*const hardhat = {
  id: 31337,
  name: 'Hardhat',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
  default: { http: ['http://127.0.0.1:8545']},
  },
  blockExplorers: {
    default: { name: 'Hardhat', url: 'http://localhost:8545'},
    },
    testnet: true,
} as const;*/

export const config = getDefaultConfig({
  appName: 'Onboarding',
  projectId: 'e10c69a63426f38b3414511665063524',
  chains: [hardhat],
  ssr: true, 
});

