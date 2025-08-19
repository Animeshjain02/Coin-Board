import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAssets = createAsyncThunk("crypto/fetchAssets", async () => {
  const res = await fetch("https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,monero,litecoin");
  const data = await res.json();
  return data.data; // API returns { data: [...] }
});

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
