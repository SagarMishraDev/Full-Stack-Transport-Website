# 3D Truck Transportation Website

A fully functional animated 3D truck transportation website with both frontend and backend. Users can book transportation services for any type of material using trucks.

## Features

- Beautiful landing page with 3D truck animations using Three.js
- Responsive design for mobile and desktop
- Interactive booking form with validation
- Backend server that sends booking data to your email
- Modern UI/UX with smooth animations

## Tech Stack

### Frontend
- React
- Three.js with React Three Fiber
- GSAP for animations
- React Router for navigation
- Axios for API requests

### Backend
- Node.js
- Express
- Nodemailer for sending emails

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```
git clone <repository-url>
cd truck-transport-website
```

2. Install frontend dependencies
```
cd frontend
npm install
```

3. Install backend dependencies
```
cd ../backend
npm install
```

### Configuration

1. Create a `.env` file in the backend directory:
```
cp backend/.env.example backend/.env
```

2. Update the `.env` file with your Gmail credentials:
```
PORT=5000
NODE_ENV=development
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-app-password
```

> **Note:** For Gmail, you need to use an App Password, not your regular password. You can generate one in your Google Account security settings.

### Running the application

1. Start the backend server:
```
cd backend
npm run dev
```

2. In a separate terminal, start the frontend development server:
```
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for production

1. Build the frontend:
```
cd frontend
npm run build
```

2. Set the environment variable for production in the backend `.env` file:
```
NODE_ENV=production
```

3. Start the production server:
```
cd backend
npm start
```

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please email: appyraja786@gmail.com 