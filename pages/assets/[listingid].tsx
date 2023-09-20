import { useRouter } from "next/router";
import {
  useContract,
  useListing,
  useValidDirectListings,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BigNumber } from "ethers";

export default function NFT() {
  const router = useRouter();
  const { listingId } = router.query as { listingId: string };
  const contractAddress = "0x233FC0Ac04E981a4F1CA118f0AAC89C7E33aD7De";
  const { contract } = useContract(contractAddress, "marketplace-v3");
  const { data: nfts, isLoading, error } = useValidDirectListings(contract);
  console.log(nfts);
  const networkMismatch = useNetworkMismatch();
  
 
}
