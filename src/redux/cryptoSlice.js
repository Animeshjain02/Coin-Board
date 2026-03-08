


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAssets = createAsyncThunk(
  "crypto/fetchAssets",
  async () => {
    // Using Coinlore API since CoinCap is sometimes blocked by ISPs and CoinGecko has strict CORS rate limits
    const res = await fetch(
      "https://api.coinlore.net/api/tickers/"
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch assets: ${res.status}`);
    }

    const json = await res.json();
    
    // Convert Coinlore's response format to match App.jsx expectations
    return json.data.map(coin => ({
      id: coin.id,
      rank: coin.rank,
      name: coin.name,
      symbol: coin.symbol,
      priceUsd: coin.price_usd,
      marketCapUsd: coin.market_cap_usd,
      volumeUsd24Hr: coin.volume24,
      changePercent24Hr: coin.percent_change_24h,
    }));
  }
);

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    assets: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAssets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.assets = action.payload;
      })
      .addCase(fetchAssets.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default cryptoSlice.reducer;
