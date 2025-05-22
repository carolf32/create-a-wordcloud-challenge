import axios from "axios";
import pLimit from "p-limit";
import WordCloudTracker from "./WordCloudTracker.js";

const limit = pLimit(10);
const tracker = new WordCloudTracker();

const fetchData = async (number) => {
  const apiRequests = [];

  for (let i = 0; i < number; i++) {
    apiRequests.push(
      limit(async () => {
        try {
          const response = await axios.get("https://catfact.ninja/fact", {
            timeout: 5000,
          });
          tracker.processText(response.data.fact);
          return (await response).data.fact;
        } catch (err) {
          console.log(`Request ${i + 1} failed`, err.message);
          return null;
        }
      })
    );
  }

  const results = await Promise.all(apiRequests);
  return results.filter(Boolean);
};

export default fetchData;
