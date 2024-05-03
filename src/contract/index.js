import { ethers } from "ethers";
import gameContracts from "./gameContracts.json";

const supportChainId = 4002;

const RPCS = {
    4002: "https://rpc.testnet.fantom.network",
    26: "http://rpc.icicbchain.com",
};

const providers = {
    4002: new ethers.providers.JsonRpcProvider(RPCS[4002]),
    26: new ethers.providers.JsonRpcProvider(RPCS[26]),
};

const TokenContract = new ethers.Contract(
    gameContracts.coin.address,
    gameContracts.coin.abi,
    providers[supportChainId]
);

const WeaponNFT = new ethers.Contract(
    gameContracts.weaponNFT.address,
    gameContracts.weaponNFT.abi,
    providers[supportChainId]
);

const MarketPlace = new ethers.Contract(
    gameContracts.marketPlace.address,
    gameContracts.marketPlace.abi,
    providers[supportChainId]
);

const MultiCall = new ethers.Contract(
    gameContracts.multiCall.address,
    gameContracts.multiCall.abi,
    providers[supportChainId]
);

const NFTContractABI = gameContracts.weaponNFT.abi;

const supportedNFTs = [WeaponNFT.address];

export {
    providers,
    TokenContract,
    WeaponNFT,
    MultiCall,
    MarketPlace,
    supportChainId,
    supportedNFTs,
    NFTContractABI,
};
