# Cat Facts Word Cloud Generator
A task for Codsec's software engineer selection process
## Overview
This Node application:
+ Fetches cat facts from the public <a href="https://catfact.ninja">CatFact.ninja API</a>
+ Processes 100+ facts concurrently with controlled parallelism
+ Generates real-time updating word cloud file, classifying words by frequency:
  + Huge: most frequent
  + Big: >60% of max frequency
  + Normal:>30% of max frequency
  + Small:<30% of max frequency

## Key features
+ Stopwords filtering
+ Skips failed requests whitout crashing
+ Real-time updates

## Technical decisions

|Requirement|Implementation|
|-|-|
|Concurrency control|p-limit |
|Text processing|Regex + stopwords|
|Real-time updates|fs.appendFileSync|

## Installation

```bash
git clone https://github.com/carolf32/create-a-wordcloud-challenge
cd create-a-wordcloud-challenge
npm install
```

## Execution
```bash
npm run dev
```
## Expected output
```text
cat: 42 (Huge)  
meow: 31 (Big)  
purr: 20 (Normal)  
paws: 5 (Small)  
```
