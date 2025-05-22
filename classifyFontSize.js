const classifyFontSize = (freq, maxFreq) => {
  if (freq === maxFreq) return "Huge";
  else if (freq > 0.6 * maxFreq) return "Big";
  else if (freq > 0.3 * maxFreq) return "Normal";
  else return "Small";
};

export default classifyFontSize;
