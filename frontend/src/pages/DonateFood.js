import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function DonateFood() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    foodName: '',
    quantity: '',
    location: '',
    description: '',
    donorName: '',
    donorPhone: '',
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setMessage({ type: '', text: '' });

  if (!formData.foodName || !formData.quantity || !formData.location) {
    setMessage({
      type: 'error',
      text: 'Please fill in all required fields'
    });
    return;
  }

  setLoading(true);

  try {
    console.log("Sending:", formData);

    const response = await axios.post(
      "https://fooddonation-r5a5.onrender.com/food",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("SUCCESS:", response.data);

    setMessage({
      type: 'success',
      text: 'Food donation posted successfully!'
    });

    setFormData({
      foodName: '',
      quantity: '',
      location: '',
      description: '',
      donorName: '',
      donorPhone: '',
    });

    setTimeout(() => {
      navigate('/');
    }, 2000);

  } catch (error) {
    console.log("FULL ERROR:", error.response?.data);

    setMessage({
      type: 'error',
      text:
        error.response?.data?.error ||
        error.response?.data?.message ||
        'Error posting donation'
    });
  } finally {
    setLoading(false);
  }
};

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Donate Food</h2>

      {message.text && (
        <div className={`alert alert-${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="foodName">Food Name *</label>
          <input
            type="text"
            id="foodName"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            placeholder="e.g., Rice, Vegetables, Cooked Meals"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity *</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g., 5kg, 10 servings, 1 box"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Chennai, New York Street"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Additional details about the food (optional)"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="donorName">Your Name</label>
          <input
            type="text"
            id="donorName"
            name="donorName"
            value={formData.donorName}
            onChange={handleChange}
            placeholder="Your name (optional)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="donorPhone">Your Phone</label>
          <input
            type="tel"
            id="donorPhone"
            name="donorPhone"
            value={formData.donorPhone}
            onChange={handleChange}
            placeholder="Your phone number (optional)"
          />
        </div>

        <div className="form-buttons">
          <button 
            type="submit" 
            className="btn-submit"
            disabled={loading}
          >
            {loading ? 'Posting...' : 'Post Donation'}
          </button>
          <button 
            type="button" 
            className="btn-cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>

      <div className="back-button" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}

export default DonateFood;
