@echo off
echo Starting Maharaj Mazda Transport Website

REM Set the current directory as the project root
cd %~dp0

REM Check if images are present
echo Checking image files...
cd frontend\public\images
node check-images.js
cd ..\..\..

REM Start backend server
cd backend
call npm install
echo Starting backend server...
start cmd /k npm run dev

REM Wait for backend to start
timeout /t 5

REM Start frontend with correct dependency resolution
cd ../frontend
echo Installing frontend dependencies with specific React version...
call npm install --legacy-peer-deps react@18.2.0 react-dom@18.2.0
call npm install --legacy-peer-deps
echo Starting frontend...
start cmd /k npm run dev

echo Both servers are running now. Open your browser and navigate to http://localhost:3000
echo.
echo IMPORTANT: Make sure to add all required images to frontend/public/images/ folder!
echo For detailed image placement instructions, see frontend/public/images/IMAGE-INSTRUCTIONS.md
echo.
echo You can close this window. 