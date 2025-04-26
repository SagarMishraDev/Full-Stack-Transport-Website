/**
 * Image Verification Script
 * Run with: node check-images.js
 * 
 * This script checks if all required images for the Maharaj Mazda Transport
 * website are present in the images directory.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of required images
const requiredImages = [
  { name: 'owner.jpg', priority: 'HIGH', section: 'Company Details - Owner Photo' },
  { name: 'hero-truck.jpg', priority: 'HIGH', section: 'Homepage Hero Banner' },
  { name: 'truck1.jpg', priority: 'HIGH', section: 'Fleet Display' },
  { name: 'truck2.jpg', priority: 'HIGH', section: 'Fleet Display' },
  { name: 'placeholder-owner.png', priority: 'MEDIUM', section: 'Fallback for owner image' },
  { name: 'placeholder-truck.png', priority: 'MEDIUM', section: 'Fallback for truck images' },
  { name: 'truck-banner.jpg', priority: 'MEDIUM', section: 'Company page banner' },
  { name: 'animated-truck.png', priority: 'LOW', section: 'Animations' },
  { name: 'form-background.jpg', priority: 'LOW', section: 'Booking Form' },
  { name: 'footer-bg.jpg', priority: 'LOW', section: 'Footer' },
  { name: 'pattern.png', priority: 'LOW', section: 'Background patterns' }
];

// Current directory
const currentDir = __dirname;

// Check for image files
const missingImages = [];
const presentImages = [];

requiredImages.forEach(image => {
  const imagePath = path.join(currentDir, image.name);
  if (fs.existsSync(imagePath)) {
    // Check if it's a text file rather than an actual image
    const fileContent = fs.readFileSync(imagePath, 'utf8').trim();
    if (fileContent.startsWith('[PLACEHOLDER')) {
      missingImages.push({ ...image, status: 'PLACEHOLDER' });
    } else {
      presentImages.push(image);
    }
  } else {
    missingImages.push({ ...image, status: 'MISSING' });
  }
});

// Display results
console.log('\n========== IMAGE CHECK RESULTS ==========\n');

if (missingImages.length === 0) {
  console.log('✅ All required images are present! Your website is ready for optimal display.\n');
} else {
  console.log(`❗ Found ${missingImages.length} missing or placeholder images that need to be added:\n`);
  
  // Group by priority
  const highPriority = missingImages.filter(img => img.priority === 'HIGH');
  const mediumPriority = missingImages.filter(img => img.priority === 'MEDIUM');
  const lowPriority = missingImages.filter(img => img.priority === 'LOW');
  
  if (highPriority.length > 0) {
    console.log('🔴 HIGH PRIORITY (Required for basic functionality):');
    highPriority.forEach(img => {
      console.log(`   - ${img.name} (${img.section}) - ${img.status === 'PLACEHOLDER' ? 'Currently a placeholder file' : 'Missing'}`);
    });
    console.log('');
  }
  
  if (mediumPriority.length > 0) {
    console.log('🟠 MEDIUM PRIORITY (Enhances user experience):');
    mediumPriority.forEach(img => {
      console.log(`   - ${img.name} (${img.section}) - ${img.status === 'PLACEHOLDER' ? 'Currently a placeholder file' : 'Missing'}`);
    });
    console.log('');
  }
  
  if (lowPriority.length > 0) {
    console.log('🟡 LOW PRIORITY (Visual enhancements):');
    lowPriority.forEach(img => {
      console.log(`   - ${img.name} (${img.section}) - ${img.status === 'PLACEHOLDER' ? 'Currently a placeholder file' : 'Missing'}`);
    });
    console.log('');
  }
}

if (presentImages.length > 0) {
  console.log(`✅ ${presentImages.length} images are correctly placed:\n`);
  presentImages.forEach(img => {
    console.log(`   - ${img.name} (${img.section})`);
  });
}

console.log('\n===========================================');
console.log('For more details, see IMAGE-INSTRUCTIONS.md in this directory.');
console.log('===========================================\n'); 