import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FoodList from '../components/FoodList';

function RequestFood() {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchFoodDonations();
  }, []);

  const fetchFoodDonations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/food`);
      setFoodItems(response.data.data);
      setMessage({ type: '', text: '' });
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Error fetching food donations. Please try again.' 
      });
      console.error('Error fetching food:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClaimFood = async (id) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/food/${id}/claim`);
      setMessage({ 
        type: 'success', 
        text: 'Food claimed successfully! Thank you.' 
      });
      fetchFoodDonations();
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Error claiming food. Please try again.' 
      });
    }
  };

  return (
    <div className="food-list-container">
      <h2>Available Food Donations</h2>

      {message.text && (
        <div className={`alert alert-${message.type}`}>
          {message.text}
        </div>
      )}

      {loading ? (
        <div className="loading">Loading food donations...</div>
      ) : (
        <FoodList 
          foodItems={foodItems} 
          onClaimFood={handleClaimFood}
        />
      )}

      <div className="back-button">
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}

export default RequestFood;
