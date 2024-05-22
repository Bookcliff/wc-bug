import TokenggAVAX from "@/contracts/TokenGGAvax";
import Storage from "@/contracts/storage";
import { encodePacked, keccak256 } from "viem";
import { useAccount, useReadContract, useSimulateContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";

const Stake = () => {
  const { chain } = useAccount()
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

  const { data: simulation, error } = useSimulateContract({
    address: data,
    abi: TokenggAVAX,
    functionName: "depositAVAX",
    query: {
      retry: false,
    },
    value: 53180000000008n,
  });

  const { data: hash, writeContract } = useWriteContract();

  const { data: txnReceipt } = useWaitForTransactionReceipt({
    hash
  })

  return (
    <div className="flex flex-col">
      <button className="disabled:bg-gray-400 w-20 mt-4 bg-green-400 cursor-pointer" disabled={!simulation} onClick={() => writeContract(simulation!.request)}>Meow</button>
      {txnReceipt && <span>Transaction Receipt: {txnReceipt?.transactionHash}</span>}
    </div>
  )
};

export default Stake;
