// Assuming timestamp is in milliseconds
const formatDate = (timestamp) => {
  const dateObject = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return dateObject.toLocaleString("en-US", options);
};
