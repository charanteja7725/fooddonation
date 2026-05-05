# Food Donation App - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### 1. Get All Food Donations
**GET** `/food`

Returns all available food donations.

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "foodName": "Rice",
      "quantity": "5kg",
      "location": "Chennai",
      "description": "Fresh white rice",
      "donorName": "John Doe",
      "donorPhone": "9876543210",
      "createdAt": "2024-05-05T10:30:00.000Z",
      "isAvailable": true
    }
  ]
}
```

---

### 2. Get Single Food Donation
**GET** `/food/:id`

Returns a specific food donation by ID.

**Parameters:**
- `id` (string): Food donation ID

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "foodName": "Rice",
    "quantity": "5kg",
    "location": "Chennai",
    "description": "Fresh white rice",
    "donorName": "John Doe",
    "donorPhone": "9876543210",
    "createdAt": "2024-05-05T10:30:00.000Z",
    "isAvailable": true
  }
}
```

---

### 3. Create Food Donation
**POST** `/food`

Creates a new food donation.

**Request Body:**
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

**Required Fields:**
- `foodName` (string)
- `quantity` (string)
- `location` (string)

**Optional Fields:**
- `description` (string)
- `donorName` (string)
- `donorPhone` (string)

**Response:**
```json
{
  "success": true,
  "message": "Food donation created successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "foodName": "Rice",
    "quantity": "5kg",
    "location": "Chennai",
    "description": "Fresh white rice",
    "donorName": "John Doe",
    "donorPhone": "9876543210",
    "createdAt": "2024-05-05T10:30:00.000Z",
    "isAvailable": true
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Please provide all required fields: foodName, quantity, location"
}
```

---

### 4. Update Food Donation
**PUT** `/food/:id`

Updates an existing food donation.

**Parameters:**
- `id` (string): Food donation ID

**Request Body:**
```json
{
  "foodName": "Cooked Rice",
  "quantity": "10kg",
  "location": "Chennai, Velachery",
  "description": "Hot cooked rice",
  "donorName": "Jane Doe",
  "donorPhone": "9876543211",
  "isAvailable": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Food donation updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "foodName": "Cooked Rice",
    "quantity": "10kg",
    "location": "Chennai, Velachery",
    "description": "Hot cooked rice",
    "donorName": "Jane Doe",
    "donorPhone": "9876543211",
    "createdAt": "2024-05-05T10:30:00.000Z",
    "isAvailable": true
  }
}
```

---

### 5. Delete Food Donation
**DELETE** `/food/:id`

Deletes a food donation.

**Parameters:**
- `id` (string): Food donation ID

**Response:**
```json
{
  "success": true,
  "message": "Food donation deleted successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "foodName": "Rice",
    "quantity": "5kg",
    "location": "Chennai"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Food donation not found"
}
```

---

### 6. Claim Food Donation
**PUT** `/food/:id/claim`

Marks a food donation as claimed (unavailable).

**Parameters:**
- `id` (string): Food donation ID

**Response:**
```json
{
  "success": true,
  "message": "Food claimed successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "foodName": "Rice",
    "quantity": "5kg",
    "location": "Chennai",
    "isAvailable": false
  }
}
```

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid input |
| 404 | Not Found - Resource not found |
| 500 | Server Error - Internal server error |

---

## Example Requests

### Using JavaScript (Fetch API)

**Create a donation:**
```javascript
fetch('http://localhost:5000/api/food', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    foodName: 'Rice',
    quantity: '5kg',
    location: 'Chennai',
    description: 'Fresh white rice',
    donorName: 'John Doe',
    donorPhone: '9876543210'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

**Get all donations:**
```javascript
fetch('http://localhost:5000/api/food')
  .then(response => response.json())
  .then(data => console.log(data));
```

**Claim a donation:**
```javascript
fetch('http://localhost:5000/api/food/507f1f77bcf86cd799439011/claim', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

### Using curl

**Create a donation:**
```bash
curl -X POST http://localhost:5000/api/food \
  -H "Content-Type: application/json" \
  -d '{
    "foodName": "Rice",
    "quantity": "5kg",
    "location": "Chennai",
    "description": "Fresh white rice",
    "donorName": "John Doe",
    "donorPhone": "9876543210"
  }'
```

**Get all donations:**
```bash
curl http://localhost:5000/api/food
```

**Get specific donation:**
```bash
curl http://localhost:5000/api/food/507f1f77bcf86cd799439011
```

**Update a donation:**
```bash
curl -X PUT http://localhost:5000/api/food/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "foodName": "Cooked Rice",
    "quantity": "10kg",
    "location": "Chennai"
  }'
```

**Claim food:**
```bash
curl -X PUT http://localhost:5000/api/food/507f1f77bcf86cd799439011/claim
```

**Delete a donation:**
```bash
curl -X DELETE http://localhost:5000/api/food/507f1f77bcf86cd799439011
```

---

## Data Models

### FoodDonation Schema

```javascript
{
  foodName: String (required),           // Name of the food
  quantity: String (required),           // Amount of food
  location: String (required),           // Where food is available
  description: String (optional),        // Additional details
  donorName: String (optional),          // Name of donor
  donorPhone: String (optional),         // Contact number
  createdAt: Date (auto),               // When donation was created
  isAvailable: Boolean (default: true)  // Availability status
}
```

---

## Error Handling

### Common Error Responses

**Missing Required Fields:**
```json
{
  "success": false,
  "message": "Please provide all required fields: foodName, quantity, location"
}
```

**Invalid ID:**
```json
{
  "success": false,
  "message": "Food donation not found"
}
```

**Server Error:**
```json
{
  "success": false,
  "message": "Error creating food donation",
  "error": "Connection refused"
}
```

---

## Rate Limiting

Currently, no rate limiting is implemented. For production, consider adding:
- Express rate limit middleware
- API key authentication
- User-based request limits

---

## Versioning

Current API version: **v1** (implied in routes)

For future versions, consider prefixing routes:
- `/api/v1/food`
- `/api/v2/food`

---

## Authentication (Future Feature)

Planned authentication methods:
- JWT (JSON Web Tokens)
- OAuth 2.0
- API Keys

---

## Testing

Use Postman collection or curl commands above to test all endpoints.

For automated testing, consider using:
- Jest
- Supertest
- Mocha

---

For more information, see README.md or QUICK_START.md
