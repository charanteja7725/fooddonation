import React from 'react';

function FoodList({ foodItems, onClaimFood }) {
  if (!foodItems || foodItems.length === 0) {
    return <div className="empty-message">No food donations available at the moment.</div>;
  }

  return (
    <div>
      {foodItems.map((food) => (
        <div key={food._id} className="food-item">
          <h3>{food.foodName}</h3>

          <div className="food-item-details">
            <div className="food-detail">
              <label>Quantity</label>
              <p>{food.quantity}</p>
            </div>

            <div className="food-detail">
              <label>Location</label>
              <p>{food.location}</p>
            </div>

            {food.description && (
              <div className="food-detail">
                <label>Description</label>
                <p>{food.description}</p>
              </div>
            )}

            {food.donorName && (
              <div className="food-detail">
                <label>Donor Name</label>
                <p>{food.donorName}</p>
              </div>
            )}

            {food.donorPhone && (
              <div className="food-detail">
                <label>Contact</label>
                <p>{food.donorPhone}</p>
              </div>
            )}

            <div className="food-detail">
              <label>Posted</label>
              <p>{new Date(food.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="food-item-actions">
            <button 
              className="btn-claim"
              onClick={() => onClaimFood(food._id)}
            >
              Claim This Food
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
