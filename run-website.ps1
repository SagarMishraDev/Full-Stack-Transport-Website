# Run-Website.ps1
Write-Host "Starting Maharaj Mazda Transport Website" -ForegroundColor Green

# Navigate to frontend directory and install dependencies
Write-Host "Setting up frontend..." -ForegroundColor Cyan
Set-Location -Path frontend
npm install --legacy-peer-deps

# Create necessary directories for images
if (-not (Test-Path "public/images")) {
    New-Item -ItemType Directory -Path "public/images" -Force | Out-Null
    Write-Host "Created images directory" -ForegroundColor Yellow
}

# Check image files
Write-Host "Checking required images..." -ForegroundColor Cyan
if (Test-Path "public/images/check-images.js") {
    Set-Location -Path public/images
    node check-images.js
    Set-Location -Path ../..
} else {
    Write-Host "Image verification script not found. Please ensure all required images are added manually." -ForegroundColor Yellow
}

# Return to root
Set-Location ..

# Navigate to backend directory and install dependencies
Write-Host "Setting up backend..." -ForegroundColor Cyan
Set-Location -Path backend
npm install

# Check if .env file exists and has valid contents
if (-not (Test-Path ".env")) {
    Write-Host "Creating .env file..." -ForegroundColor Yellow
    @"
PORT=5000
NODE_ENV=development
EMAIL_USER=appyraja786@gmail.com
EMAIL_PASS=your-app-sagar@#$@#$
"@ | Out-File -FilePath ".env" -Encoding utf8
    Write-Host "Created .env file. Please update the EMAIL_PASS with your Gmail App Password!" -ForegroundColor Red
}

# Return to root
Set-Location ..

# Start backend in the background
Write-Host "Starting backend server..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm run dev"

# Give the backend time to start
Start-Sleep -Seconds 3

# Start frontend
Write-Host "Starting frontend server..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev"

Write-Host "Both servers are running now." -ForegroundColor Green
Write-Host "Open your browser and navigate to: http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "IMPORTANT: Make sure to add all required images to frontend/public/images directory!" -ForegroundColor Yellow
Write-Host "For detailed image placement instructions, see frontend/public/images/IMAGE-INSTRUCTIONS.md" -ForegroundColor Yellow 