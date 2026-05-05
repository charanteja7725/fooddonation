# Food Donation Application - MERN Stack

A full-stack web application built with MongoDB, Express, React, and Node.js that connects food donors with people who need food.

## 🚀 Features

- **Donate Food**: Users can post available food donations with details like quantity, location, and description
- **Request Food**: Users can view available food donations in real-time
- **Claim Food**: Users can claim food items they need
- **Real-time Updates**: Get instant updates when new donations are posted
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Form Validation**: Ensures all required fields are filled before submission
- **User-friendly UI**: Clean and intuitive interface

## 📋 Project Structure

```
food-donation/
├── backend/
│   ├── models/
│   │   └── FoodDonation.js
│   ├── routes/
│   │   └── foodRoutes.js
│   ├── controllers/
│   │   └── foodController.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── FoodList.js
    │   ├── pages/
    │   │   ├── Home.js
    │   │   ├── DonateFood.js
    │   │   └── RequestFood.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    ├── public/
    │   └── index.html
    ├── package.json
    ├── .env
    └── .gitignore
```

## 🛠️ Technology Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **CORS**: Cross-Origin Resource Sharing

### Frontend
- **React**: UI library
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **CSS3**: Styling

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file and configure:
```env
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/food_donation?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

4. Start the backend server:
```bash
npm start
```
For development with auto-reload:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 🔌 API Endpoints

### Food Donations

- **GET** `/api/food` - Get all available food donations
- **GET** `/api/food/:id` - Get a specific food donation
- **POST** `/api/food` - Create a new food donation
- **PUT** `/api/food/:id` - Update a food donation
- **DELETE** `/api/food/:id` - Delete a food donation
- **PUT** `/api/food/:id/claim` - Claim a food item (mark as unavailable)

### Request Body Example (POST)
```json
{
  "foodName": "Rice",
  "quantity": "5kg",
  "location": "Chennai",
  "description": "Fresh white rice",
  "donorName": "John Doe",
  "donorPhone": "9876543210"
}
```

## 📱 Usage

1. **Home Page**: Start by clicking "Donate Food" or "Request Food"

2. **Donate Food**:
   - Fill in the food name, quantity, and location (required)
   - Optionally add description, your name, and phone number
   - Click "Post Donation"
   - Get a success message and return to home

3. **Request Food**:
   - View all available food donations
   - See details like quantity, location, and donor contact
   - Click "Claim This Food" if you need it
   - Food becomes unavailable for others after claiming

## 🗄️ MongoDB Schema

```javascript
FoodDonation {
  foodName: String (required),
  quantity: String (required),
  location: String (required),
  description: String (optional),
  donorName: String (optional),
  donorPhone: String (optional),
  createdAt: Date (default: current date),
  isAvailable: Boolean (default: true)
}
```

## 🔒 Environment Variables

### Backend (.env)
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment (development/production)

### Frontend (.env)
- `REACT_APP_API_URL`: Backend API URL (default: http://localhost:5000/api)

## 🚀 Deployment

### Backend (Heroku/Railway)
1. Add a `Procfile` with `web: node server.js`
2. Set environment variables in the hosting platform
3. Deploy using git push

### Frontend (Vercel/Netlify)
1. Build the app: `npm run build`
2. Connect your repository to Vercel/Netlify
3. Set `REACT_APP_API_URL` to your deployed backend URL
4. Deploy

## 📝 Future Enhancements

- User authentication and authorization
- Image uploads for food items
- User profiles and ratings
- Search and filter functionality
- Map integration for location
- Notifications for new donations
- Admin dashboard
- Analytics and reporting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 💬 Contact & Support

For questions or support, please create an issue in the repository.

---

**Happy Donating! 🍲**
