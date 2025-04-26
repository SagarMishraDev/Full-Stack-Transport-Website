#!/bin/bash

# Start backend server
cd backend
npm install
echo "Starting backend server..."
npm run dev &

# Wait for backend to start
sleep 5

# Start frontend
cd ../frontend
npm install
echo "Starting frontend..."
npm run dev

echo "Both servers are running now. Press Ctrl+C to exit." 