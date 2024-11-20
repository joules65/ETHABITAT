import React from 'react';
import { Wallet as WalletIcon, Link as LinkIcon, AlertCircle } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';

const Wallet = () => {
  const { address, balance, isConnected, error, connectWallet, disconnectWallet } = useWallet();

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <WalletIcon className="h-16 w-16 text-yellow-500 mx-auto" />
        <h1 className="text-3xl font-bold">Connect Your Wallet</h1>
        <p className="text-yellow-500">
          Connect your wallet to start buying and selling properties with cryptocurrency
        </p>
      </div>

      <div className="bg-zinc-950 rounded-lg p-8">
        {error && (
          <div className="flex items-center space-x-2 text-red-400 bg-red-900 bg-opacity-20 p-4 rounded-lg mb-6">
            <AlertCircle className="h-5 w-5" />
            <p>{error}</p>
          </div>
        )}

        {isConnected ? (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-yellow-400 rounded-lg">
                <span className="text-white">Address</span>
                <span className="font-mono">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-yellow-500 rounded-lg">
                <span className="text-white">Balance</span>
                <span>{balance?.slice(0, 8)} ETH</span>
              </div>
            </div>
            <button
              onClick={disconnectWallet}
              className="w-full btn-secondary"
            >
              Disconnect Wallet
            </button>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <LinkIcon className="h-5 w-5" />
            <span>Connect MetaMask</span>
          </button>
        )}
      </div>

      <div className="bg-yellow-500 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Why Connect Your Wallet?</h2>
        <ul className="space-y-3 text-white">
          <li>• Buy and sell properties using cryptocurrency</li>
          <li>• Access exclusive property listings</li>
          <li>• Participate in property auctions</li>
          <li>• Track your real estate investments</li>
          <li>• Generate and sign smart contracts</li>
        </ul>
      </div>
    </div>
  );
};

export default Wallet;