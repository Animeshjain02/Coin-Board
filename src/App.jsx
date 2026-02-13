






import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssets } from "./redux/cryptoSlice";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const { assets, status } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchAssets());

    const interval = setInterval(() => {
      dispatch(fetchAssets());
    }, 10000); // refresh every 10 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  if (status === "loading") {
    return <div className="crypto-container">Loading...</div>;
  }

  if (status === "failed") {
    return (
      <div className="crypto-container">
        <p style={{ color: "red" }}>Failed to load data</p>
      </div>
    );
  }

  return (
    <div className="crypto-container">
      <h1 style={{ marginBottom: "20px" }}>Coin Board</h1>

      <table className="crypto-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-right">Market Cap</th>
            <th className="text-right">Volume (24Hr)</th>
            <th className="text-right">Change (24Hr)</th>
          </tr>
        </thead>

        <tbody>
          {assets.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.rank}</td>

              <td>
                <div style={{ fontWeight: "600" }}>
                  {coin.name}
                </div>
                <div style={{ fontSize: "12px", opacity: 0.6 }}>
                  {coin.symbol}
                </div>
              </td>

              <td className="text-right">
                ${Number(coin.priceUsd).toLocaleString()}
              </td>

              <td className="text-right">
                $
                {(Number(coin.marketCapUsd) / 1e9).toFixed(2)}B
              </td>

              <td className="text-right">
                $
                {(Number(coin.volumeUsd24Hr) / 1e9).toFixed(2)}B
              </td>

              <td
                className={`text-right ${
                  Number(coin.changePercent24Hr) >= 0
                    ? "positive"
                    : "negative"
                }`}
              >
                {Number(coin.changePercent24Hr).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
