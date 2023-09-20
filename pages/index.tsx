import {
  ConnectWallet,
  useActiveListings,
  useContract,
  useValidDirectListings,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import NFTCard from "../components/NFTCard";

const Home: NextPage = () => {
  const contractAddress = "0x233FC0Ac04E981a4F1CA118f0AAC89C7E33aD7De";
  const { contract } = useContract(contractAddress, "marketplace-v3");
  const { data: nfts, isLoading, error } = useValidDirectListings(contract);
  console.log(nfts);
  if (isLoading)
    return (
      <div className={"mb-3 flex w-screen justify-center"}>Loading ...</div>
    );

  return (
    <div className={"space-y-4 p-2"}>
        <div className={"text-2xl font-semibold"}>Active Listings</div>
        
      <div className={`nft-grid`}>
           
      {nfts &&
        nfts.map((nft, index) => {
          return (
            <a key={nft.asset.tokenId || index}> {/* Use NFT tokenId as key if it exists, otherwise use the index as a fallback */}
              <NFTCard
                nft={{
                  name: nft.asset.name as string,
                  tokenUri: nft.asset.image as string,
                  price: nft.currencyValuePerToken?.displayValue, // Corrected property name
                }}
              />
            </a>
          );
        })}
           
      </div>
        
    </div>
  );
};

export default Home;
