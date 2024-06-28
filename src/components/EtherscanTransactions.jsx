import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionsCard from "./TransactionsCard"; // Assuming you have a TransactionsCard component

const EtherscanTransactions = ({ address }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&sort=desc&apikey=P5EYZBXGWD4DEEYBBZ192SZF4YEIFYX1SB`
        );
        if (response.data.status === "1") {
          setTransactions(response.data.result);
          setLoading(false);
        } else {
          console.error("Error fetching transactions:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [address]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center items-center mt-10">
      {transactions.map((transaction, i) => (
        <TransactionsCard
          key={i}
          addressTo={transaction.to}
          addressFrom={transaction.from}
          timestamp={new Date(parseInt(transaction.timeStamp) * 1000).toLocaleString()}
          message={transaction.input}
          amount={transaction.value / 1e18} // Convert from Wei to Ether
          gifUrl="" // You can fetch GIF URLs based on transaction data if needed
        />
      ))}
    </div>
  );
};

export default EtherscanTransactions;
