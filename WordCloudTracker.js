import fs from "fs";
import classifyFontSize from "./classifyFontSize.js";

const stopWords = new Set([
  "the",
  "and",
  "of",
  "to",
  "a",
  "in",
  "is",
  "it",
  "you",
  "that",
  "he",
  "was",
  "for",
  "on",
  "are",
  "as",
  "with",
  "his",
  "they",
  "I",
  "s",
  "at",
  "or",
  "if",
  "so",
]);

class WordCloudTracker {
  constructor() {
    this.wordMap = new Map();
  }

  processText(text) {
    const words = text.toLowerCase().match(/\b[a-zA-Z]+\b/g);

    words.forEach((word) => {
      if (!stopWords.has(word)) {
        this.wordMap.set(word, (this.wordMap.get(word) || 0) + 1);
      }
    });
    this.updateFile();
  }

  updateFile() {
    const filteredWordFrequency = Array.from(this.wordMap.entries())
      .filter(([word, count]) => count > 1)
      .sort((a, b) => b[1] - a[1]);

    const maxFreq = filteredWordFrequency[0][1];

    const finalOutput = filteredWordFrequency.map(([word, freq]) => {
      const sizeClass = classifyFontSize(freq, maxFreq);
      return `${word}: ${freq} - ${sizeClass}`;
    });

    fs.writeFileSync("wordcloud.txt", finalOutput.join("\n"));
  }
}
export default WordCloudTracker;
