import React from "react";
// import { formatDate } from "../utils/formatDate";

const UserTransactionDetails = ({ transaction }) => {
  const { addressTo, addressFrom, message, amount } = transaction;
//   const formattedDate = formatDate(timestamp); 
  return (
    <div className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <p className="text-white text-base">From: {addressFrom}</p>
          <p className="text-white text-base">To: {addressTo}</p>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          {/* <p className="text-[#37c7da] font-bold">Timestamp: {formattedDate}</p> */}
        </div>
      </div>
    </div>
  );
};

export default UserTransactionDetails;
