# copilot  workspace  demo

## Setting up the Node.js Backend

This project includes a simple Node.js backend setup using TypeScript and Express. Follow the steps below to get it up and running:

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the necessary dependencies:
   ```
   npm install
   ```

3. To build the TypeScript files, run:
   ```
   npm run build
   ```

4. To start the server, run:
   ```
   npm start
   ```

The server will start and listen on the port specified in the `backend/src/server.ts` file. You can access the health check endpoint at `http://localhost:<port>/health` to verify that the server is running.
