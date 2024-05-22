import TokenggAVAX from "@/contracts/TokenGGAvax";
import Storage from "@/contracts/storage";
import { encodePacked, keccak256 } from "viem";
import { useReadContract, useSimulateContract } from "wagmi";

const Stake = () => {
  const useGetAddress = (key: AllContracts) => {
    const args = keccak256(
      encodePacked(["string", "string"], ["contract.address", key])
    );

    const resp = useReadContract({
      address: "0x399D78327E665D21c8B9582D4843CA5DCA0e7dc4",
      abi: Storage,
      functionName: "getAddress",
      args: [args],
    });

    return resp;
  };

  const { data } = useGetAddress("TokenggAVAX");

  console.log({ data });

  const { data: simulation } = useSimulateContract({
    address: data,
    abi: TokenggAVAX,
    functionName: "depositAVAX",
    value: 10000000000000000000n,
  });
  console.log({ simulation });
  return <div>Meow</div>;
};

export default Stake;
