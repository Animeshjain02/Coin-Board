// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAssets } from "./redux/cryptoSlice";

// export default function App() {
//   const dispatch = useDispatch();
//   const { assets, status } = useSelector((state) => state.crypto);

//   useEffect(() => {
//     dispatch(fetchAssets());
//     const interval = setInterval(() => {
//       dispatch(fetchAssets());
//     }, 10000); // refresh every 10s
//     return () => clearInterval(interval);
//   }, [dispatch]);

//   if (status === "loading") return <p>Loading...</p>;
//   if (status === "failed") return <p>Failed to load data</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Crypto Tracker</h1>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Price (USD)</th>
//             <th className="border p-2">Market Cap</th>
//             <th className="border p-2">Change (24h)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {assets.map((coin) => (
//             <tr key={coin.id}>
//               <td className="border p-2">{coin.name}</td>
//               <td className="border p-2">${parseFloat(coin.priceUsd).toFixed(2)}</td>
//               <td className="border p-2">${Number(coin.marketCapUsd / 1e9).toFixed(2)}B</td>
//               <td
//                 className={`border p-2 ${parseFloat(coin.changePercent24Hr) >= 0 ? "text-green-600" : "text-red-600"}`}
//               >
//                 {parseFloat(coin.changePercent24Hr).toFixed(2)}%
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

export default function App() {
  return (
    <h1 className="text-3xl font-bold text-blue-600">
      Hello Tailwind + Vite 🚀
    </h1>
  );
}
