# Node.js Express Server Asynchronous Operation Bug
This repository demonstrates a common issue in Node.js Express servers where the server closes before completing asynchronous operations within request handlers.  The bug is that the server responds to the request ('Hello') immediately but the console.log('World') within setTimeout is never executed because the server closes before the timeout completes.

## Bug
The `bug.js` file contains the problematic code.  The server responds to the request immediately but then closes, and the asynchronous operation is never executed.

## Solution
The `bugSolution.js` file shows a solution that prevents the server from closing before completing the asynchronous operation.

## How to reproduce:
1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node bug.js`
4. Make a request to `http://localhost:3000` in the browser.
5. Observe that 'Hello' is sent to the browser but 'World' is never printed to the console, indicating that the server closed before finishing the asynchronous task.
6. Run `node bugSolution.js` and repeat steps 3 and 4. You should now see both 'Hello' and 'World' printed to the console.