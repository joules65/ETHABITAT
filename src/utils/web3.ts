import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const connectWallet = async () => {
  try {
    if (typeof window !== 'undefined' && window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      return signer;
    }
    throw new Error('No Ethereum wallet found');
  } catch (error) {
    console.error('Error connecting wallet:', error);
    throw error;
  }
};

export const getBalance = async (address: string) => {
  try {
    if (typeof window !== 'undefined' && window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(address);
      return ethers.formatEther(balance);
    }
    throw new Error('No Ethereum provider found');
  } catch (error) {
    console.error('Error getting balance:', error);
    throw error;
  }
};

export const sendTransaction = async (
  signer: ethers.Signer,
  to: string,
  amount: string
) => {
  try {
    const tx = await signer.sendTransaction({
      to,
      value: ethers.parseEther(amount),
    });
    return tx;
  } catch (error) {
    console.error('Error sending transaction:', error);
    throw error;
  }
};