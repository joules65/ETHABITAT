/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ArrowRightLeft, TrendingUp, AlertCircle } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';

const Trade = () => {
  const { isConnected, address } = useWallet();
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');

  const handleTrade = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle trade execution
  };

  if (!isConnected) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto" />
        <h2 className="text-2xl font-bold">Wallet Not Connected</h2>
        <p className="text-white">Please connect your wallet to access the trading features.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Trading Interface */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Trading Form */}
        <div className="bg-black p-8 rounded-lg">
          <div className="flex items-center space-x-2 mb-6">
            <ArrowRightLeft className="h-6 w-6 text-emerald-500" />
            <h2 className="text-2xl font-bold">Trade</h2>
          </div>

          <form onSubmit={handleTrade} className="space-y-6">
            <div className="flex space-x-4">
              <button
                type="button"
                className={`flex-1 py-3 px-4 rounded-lg font-semibold ${
                  tradeType === 'buy'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-700 text-gray-300'
                }`}
                onClick={() => setTradeType('buy')}
              >
                Buy
              </button>
              <button
                type="button"
                className={`flex-1 py-3 px-4 rounded-lg font-semibold ${
                  tradeType === 'sell'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-700 text-gray-300'
                }`}
                onClick={() => setTradeType('sell')}
              >
                Sell
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Amount (ETH)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input-field w-full"
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              {tradeType === 'buy' ? 'Buy ETH' : 'Sell ETH'}
            </button>
          </form>
        </div>

        {/* Market Information */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Market Overview</h3>
            <div className="space-y-4">
              <MarketStat label="ETH Price" value="$3,245.67" change="+2.45%" />
              <MarketStat label="24h Volume" value="$1.2B" change="+5.67%" />
              <MarketStat label="Market Cap" value="$380.5B" change="+1.23%" />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Your Trading Stats</h3>
            <div className="space-y-4">
              <TradingStat label="Total Trades" value="23" />
              <TradingStat label="Trading Volume" value="45.5 ETH" />
              <TradingStat label="Average Trade Size" value="1.98 ETH" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Trades */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Recent Trades</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400">
                <th className="pb-4">Type</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Price</th>
                <th className="pb-4">Total</th>
                <th className="pb-4">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <TradeRow type="buy" amount="2.5 ETH" price="$3,240.50" total="$8,101.25" date="2024-03-15" />
              <TradeRow type="sell" amount="1.2 ETH" price="$3,238.75" total="$3,886.50" date="2024-03-14" />
              <TradeRow type="buy" amount="3.0 ETH" price="$3,235.20" total="$9,705.60" date="2024-03-13" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const MarketStat = ({ label, value, change }: { label: string; value: string; change: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-400">{label}</span>
    <div className="text-right">
      <span className="font-semibold">{value}</span>
      <span className={`ml-2 text-sm ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </span>
    </div>
  </div>
);

const TradingStat = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-white">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

const TradeRow = ({ type, amount, price, total, date }: { type: string; amount: string; price: string; total: string; date: string }) => (
  <tr className="border-t border-gray-700">
    <td className="py-4">
      <span className={`px-2 py-1 rounded text-sm ${
        type === 'buy' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
      }`}>
        {type.toUpperCase()}
      </span>
    </td>
    <td className="py-4">{amount}</td>
    <td className="py-4">{price}</td>
    <td className="py-4">{total}</td>
    <td className="py-4">{date}</td>
  </tr>
);

export default Trade;