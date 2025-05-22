import fetchData from "./fetchData.js";

const main = async () => {
  const totalRequests = 100;
  await fetchData(totalRequests);
};

main();
