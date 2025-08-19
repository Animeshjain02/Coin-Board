const sampleAssets = [
    {
      id: 'btc',
      logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 63425,
      change1h: 0.5,
      change24h: -1.2,
      change7d: 2.1,
      marketCap: '1.23T',
      volume24h: '36B',
      supply: '19.2M',
      maxSupply: '21M',
      chart: 'https://www.coingecko.com/coins/1/sparkline', // can be any chart image
    },
    {
      id: 'eth',
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 3120,
      change1h: -0.3,
      change24h: 1.1,
      change7d: -0.9,
      marketCap: '398B',
      volume24h: '15B',
      supply: '120M',
      maxSupply: '∞',
      chart: 'https://www.coingecko.com/coins/279/sparkline',
    },
    // Add 3 more coins if you want
  ];
  
  export default sampleAssets;
  