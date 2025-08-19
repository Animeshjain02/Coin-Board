import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [],
};

const getRandomDelta = (value) => {
  const num = parseFloat(value);
  if (isNaN(num)) return value; 
  const change = num * (Math.random() * 0.01 - 0.005);
  return parseFloat((num + change).toFixed(2));
};


const getRandomPercent = () => {
  return parseFloat((Math.random() * 10 - 5).toFixed(2));
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setAssets: (state, action) => {
      state.assets = action.payload;
    },
    updateAssets: (state) => {
      state.assets = state.assets.map((asset) => ({
        ...asset,
        price: getRandomDelta(asset.price),
        change1h: getRandomPercent(),
        change24h: getRandomPercent(),
        change7d: getRandomPercent(),
        volume24h: getRandomDelta(asset.volume24h),
      }));
    },
  },
});

export const { setAssets, updateAssets } = cryptoSlice.actions;

export default cryptoSlice.reducer;
