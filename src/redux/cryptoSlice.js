


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAssets = createAsyncThunk(
  "crypto/fetchAssets",
  async () => {
    const res = await fetch(
      // "https://rest.coincap.io/v3/assets?ids=bitcoin,ethereum,monero,litecoin",
      
      "https://rest.coincap.io/v3/assets?limit=50ids=bitcoin,ethereum,monero,litecoin&include=market_data",

      {
        headers: {
          Authorization: "Bearer YOUR_API_KEY_HERE",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch assets");
    }

    const data = await res.json();
    console.log("API",data);

    return data.data; // v3 still returns { data: [...] }
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
