import { ConnectButton } from "@rainbow-me/rainbowkit";
import Stake from "./Stake";

export default function Home() {
  return (
    <div>
      <div>Meow</div>
      <div>
        <ConnectButton />
        <Stake />
      </div>
    </div>
  );
}
