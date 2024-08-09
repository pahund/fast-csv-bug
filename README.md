# fast-csv-bug

Demo project to reproduce a bug in the open source library [Fast-CSV](https://c2fo.github.io/fast-csv/).

👉🏻 See [Fast-CSV issue #784](https://github.com/C2FO/fast-csv/issues/784)

## Installation

### Prerequisites

Make sure [Node.js](https://nodejs.org/) is installed with at least version 22. Preferrably, use [nvm](https://github.com/nvm-sh/nvm) to install:

```
nvm install 22
nvm use
```

### Install dependencies

```
npm install
```

## Running the demo

```
npm run demo
```

A file `demo.csv` is created. Note that the file should have 10,001 lines. It actually only has 2,499 lines. The file size is 64 KB. If you reduce the number of columns, e.g. by commenting out lines 28 and 36 in `demo.mjs`, you'll get more lines, but still not all 10,001. The file size will never get bigger than 64 KB.

