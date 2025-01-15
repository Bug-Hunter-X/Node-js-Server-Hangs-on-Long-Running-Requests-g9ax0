# Node.js Server Hang on Long Tasks

This repository demonstrates a common issue in Node.js applications: server hangs due to long-running synchronous operations.  The `serverHang.js` file shows a server that becomes unresponsive when handling a request that takes a long time to process. The `serverHangSolution.js` file presents a solution using asynchronous programming to prevent the hang.

## Problem

Node.js is single-threaded.  Long-running synchronous operations block the event loop, preventing the server from handling other requests. This leads to unresponsive servers and a poor user experience.

## Solution

Use asynchronous operations (e.g., callbacks, promises, async/await) to avoid blocking the event loop. This allows Node.js to handle other requests concurrently.