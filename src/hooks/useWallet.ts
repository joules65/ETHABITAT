import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

interface WalletState {
  address: string | null;
  balance: string | null;
  isConnected: boolean;
  error: string | null;
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    address: null,
    balance: null,
    isConnected: false,
    error: null,
  });

  useEffect(() => {
    // Check if there's a stored wallet in localStorage on page load
    const storedAddress = localStorage.getItem('walletAddress');
    const storedBalance = localStorage.getItem('walletBalance');
    
    if (storedAddress && storedBalance) {
      setWalletState({
        address: storedAddress,
        balance: storedBalance,
        isConnected: true,
        error: null,
      });
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      setWalletState(prev => ({
        ...prev,
        error: 'Please install MetaMask to connect your wallet',
      }));
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const balance = await provider.getBalance(accounts[0]);
      const formattedBalance = ethers.formatEther(balance);

      // Save wallet state in localStorage
      localStorage.setItem('walletAddress', accounts[0]);
      localStorage.setItem('walletBalance', formattedBalance);

      setWalletState({
        address: accounts[0],
        balance: formattedBalance,
        isConnected: true,
        error: null,
      });
    } catch (error) {
      setWalletState(prev => ({
        ...prev,
        error: 'Failed to connect wallet',
      }));
    }
  };

  const disconnectWallet = () => {
    // Remove wallet state from localStorage
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('walletBalance');

    setWalletState({
      address: null,
      balance: null,
      isConnected: false,
      error: null,
    });
  };

  return {
    ...walletState,
    connectWallet,
    disconnectWallet,
  };
};
