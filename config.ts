import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { avalanche, avalancheFuji } from "viem/chains";

export const config = getDefaultConfig({
  appName: "GoGoPool",
  projectId: "4fd4f27243b1ecf5ad4ab9559c90b5bc",
  chains: [avalanche, avalancheFuji],
  wallets: [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, walletConnectWallet],
    },
  ],
});
