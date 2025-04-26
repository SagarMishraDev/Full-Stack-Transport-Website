# Maharaj Mazda Transport Website

A fully functional animated 3D truck transportation website with both frontend and backend. Users can book transportation services for any type of material using trucks.

## Features

- Beautiful landing page with 3D truck animations using Three.js
- High-quality truck images throughout the website
- Responsive design for mobile and desktop
- Interactive booking form with validation and enhanced UX
- Company Details page with owner information
- Backend server that sends booking data to your email (appyraja786@gmail.com)
- Modern UI/UX with smooth animations
- Framer Motion animations throughout the site

## Tech Stack

### Frontend
- React
- Three.js with React Three Fiber
- Framer Motion for animations
- GSAP for 3D animations
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
- Gmail account with App Password enabled

### Installation

1. Clone the repository
```
git clone <repository-url>
cd truck-transport-website
```

2. Install dependencies for both frontend and backend
```
cd frontend
npm install --legacy-peer-deps
cd ../backend
npm install
```

### Configuration

1. Make sure the `.env` file exists in the backend directory with your Gmail credentials:
```
PORT=5000
NODE_ENV=development
EMAIL_USER=appyraja786@gmail.com
EMAIL_PASS=your-app-password
```

**Important:** Replace 'your-app-password' with a valid Gmail App Password.
* Go to your [Google Account](https://myaccount.google.com/)
* Go to Security
* Under "Signing in to Google", select App passwords
* Generate a new app password and use it in the .env file

### Images

Add high-quality images to the project in the following directory:
```
frontend/public/images/
```

#### Required Images
The website requires the following images for optimal display:

##### Essential Images (Required for proper functioning)
1. `owner.jpg` - Professional portrait of Girdhar Gopal Mishra (owner)
2. `hero-truck.jpg` - HD image of a truck for the hero section background
3. `truck1.jpg` and `truck2.jpg` - High-quality images of trucks for the fleet section
4. `placeholder-owner.png` - Default placeholder for owner image (already provided)
5. `placeholder-truck.png` - Default placeholder for truck images (already provided)

##### Additional Images (For enhanced visual appeal)
6. `animated-truck.png` - Transparent PNG of a truck for animations
7. `truck-banner.jpg` - Wide HD image of trucks for company page banner
8. `form-background.jpg` - Background image for the booking form
9. `footer-bg.jpg` - Dark-themed background for the footer
10. `pattern.png` - Subtle pattern for the services section background

See `frontend/public/images/placeholder.txt` for the complete list of recommended images.

### Company Details Page

The Company Details page displays information about Maharaj Mazda Transport and its owner. It includes:

1. **Owner Information**: Shows a photo of the owner, Girdhar Gopal Mishra, along with contact details
2. **Company History**: Displays the company's founding date and background information
3. **Core Values**: Highlights the company's commitment to safety, reliability, integrity, and excellence
4. **Fleet Display**: Showcases images of the company's trucks

To update the owner's information:
- Edit the file at `frontend/src/pages/CompanyDetails.jsx`
- Replace the owner's image at `frontend/public/images/owner.jpg`

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

### Alternative: Using start scripts

You can also use the provided start scripts:

Windows:
```
start.bat
```

Mac/Linux:
```
chmod +x start.sh
./start.sh
```

## Troubleshooting

### Email Not Working
- Verify your Gmail App Password is correct in the backend/.env file
- Ensure your Gmail account has "Less secure app access" enabled or is properly configured for App Passwords
- Check backend logs for any email sending errors

### Frontend Dependency Issues
If you encounter dependency issues with Three.js or React Three Fiber, try installing with the legacy peer deps flag:
```
npm install --legacy-peer-deps
```

### Image Loading Issues
- Make sure all required images are placed in the `frontend/public/images/` directory
- Check that image filenames match exactly with what's specified in the code
- Images should be in JPG or PNG format with reasonable file sizes (under 500KB per image recommended)
- If images don't appear, check browser console for 404 errors to identify missing files

## Feedback and Support

For any inquiries, please email: appyraja786@gmail.com 