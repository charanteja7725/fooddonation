# Quick Start Guide - Food Donation App

## Option 1: Manual Setup (Recommended for Development)

### Step 1: Install Node.js
Download and install from https://nodejs.org/ (LTS version)

### Step 2: Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file with MongoDB connection
# Edit .env and add your MongoDB URI
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/food_donation

# Start backend server
npm start
# Server runs on http://localhost:5000
```

### Step 3: Setup Frontend (New Terminal)

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start React development server
npm start
# App opens on http://localhost:3000
```

### Step 4: Test the App

1. Open browser at `http://localhost:3000`
2. Click "Donate Food" and submit a sample donation
3. Click "Request Food" to see the donation appear in real-time
4. Click "Claim This Food" to mark it as claimed

---

## Option 2: Docker Setup (For Production-like Environment)

### Prerequisites
- Install Docker: https://www.docker.com/

### Run with Docker Compose

```bash
# From the project root directory
docker-compose up

# This will:
# - Start MongoDB on localhost:27017
# - Start Backend on localhost:5000
# - Start Frontend on localhost:3000
```

### Stop containers
```bash
docker-compose down
```

---

## MongoDB Setup

### Option A: MongoDB Atlas (Cloud - Recommended)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Create a database user
5. Get your connection string
6. Add connection string to `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/food_donation?retryWrites=true&w=majority
   ```

### Option B: Local MongoDB

1. Download from https://www.mongodb.com/try/download/community
2. Install and run MongoDB locally
3. Use connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/food_donation
   ```

---

## Common Issues & Fixes

### Issue: Port 5000 or 3000 already in use
```bash
# Find and kill process using port
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :5000
kill -9 <PID>
```

### Issue: MongoDB connection fails
- Verify connection string in `.env`
- Check if MongoDB is running
- Ensure IP whitelist includes your IP (for MongoDB Atlas)

### Issue: CORS errors
- Make sure backend is running on port 5000
- Check frontend `.env` has correct REACT_APP_API_URL

### Issue: Dependencies not installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## API Testing

### Using Postman or curl

**Create a donation:**
```bash
curl -X POST http://localhost:5000/api/food \
  -H "Content-Type: application/json" \
  -d '{
    "foodName": "Rice",
    "quantity": "5kg",
    "location": "Chennai",
    "description": "Fresh white rice",
    "donorName": "John",
    "donorPhone": "9876543210"
  }'
```

**Get all donations:**
```bash
curl http://localhost:5000/api/food
```

**Claim a donation (replace ID):**
```bash
curl -X PUT http://localhost:5000/api/food/{ID}/claim
```

---

## Useful Commands

### Backend
```bash
cd backend
npm install          # Install dependencies
npm start           # Start server
npm run dev         # Start with auto-reload (needs nodemon)
```

### Frontend
```bash
cd frontend
npm install         # Install dependencies
npm start           # Start dev server
npm run build       # Build for production
npm test            # Run tests
```

---

## Project Features Checklist

- ✅ Home page with navigation
- ✅ Donate Food form with validation
- ✅ Request Food with real-time list
- ✅ MongoDB integration
- ✅ Express API with CRUD operations
- ✅ React components with routing
- ✅ Responsive design
- ✅ Error handling and alerts
- ✅ Claim food functionality
- ✅ Docker support

---

## Next Steps for Enhancement

1. **Authentication**: Add user login/registration
2. **Images**: Allow food photo uploads
3. **Maps**: Integrate Google Maps for location
4. **Search**: Add search and filter functionality
5. **Notifications**: Email/SMS notifications
6. **Database**: Add donor/requester profiles
7. **Ratings**: User review system
8. **Admin Panel**: Manage donations and users

---

## Deployment

### Deploy Backend
- Heroku: `git push heroku main`
- Railway: Connect GitHub repo
- AWS: Use EC2 and Elastic Beanstalk

### Deploy Frontend
- Vercel: Connect GitHub, auto-deploys
- Netlify: Drag and drop or connect GitHub
- GitHub Pages: `npm run build` and deploy `build` folder

---

For more help, check README.md or create an issue on GitHub!
