const FoodDonation = require('../models/FoodDonation');

// Get all food donations
exports.getAllFood = async (req, res) => {
  try {
    const foodDonations = await FoodDonation.find({ isAvailable: true }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: foodDonations.length,
      data: foodDonations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching food donations',
      error: error.message,
    });
  }
};

// Get single food donation
exports.getFoodById = async (req, res) => {
  try {
    const food = await FoodDonation.findById(req.params.id);
    if (!food) {
      return res.status(404).json({
        success: false,
        message: 'Food donation not found',
      });
    }
    res.status(200).json({
      success: true,
      data: food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching food donation',
      error: error.message,
    });
  }
};

// Create new food donation
exports.createFood = async (req, res) => {
  try {
    const { foodName, quantity, location, description, donorName, donorPhone } = req.body;

    // Validation
    if (!foodName || !quantity || !location) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: foodName, quantity, location',
      });
    }

    const newFood = await FoodDonation.create({
      foodName,
      quantity,
      location,
      description,
      donorName,
      donorPhone,
    });

    res.status(201).json({
      success: true,
      message: 'Food donation created successfully',
      data: newFood,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating food donation',
      error: error.message,
    });
  }
};

// Update food donation
exports.updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const { foodName, quantity, location, description, donorName, donorPhone, isAvailable } = req.body;

    const food = await FoodDonation.findByIdAndUpdate(
      id,
      { foodName, quantity, location, description, donorName, donorPhone, isAvailable },
      { new: true, runValidators: true }
    );

    if (!food) {
      return res.status(404).json({
        success: false,
        message: 'Food donation not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Food donation updated successfully',
      data: food,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating food donation',
      error: error.message,
    });
  }
};

// Delete food donation
exports.deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await FoodDonation.findByIdAndDelete(id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: 'Food donation not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Food donation deleted successfully',
      data: food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting food donation',
      error: error.message,
    });
  }
};

// Mark as unavailable (claimed)
exports.claimFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await FoodDonation.findByIdAndUpdate(
      id,
      { isAvailable: false },
      { new: true }
    );

    if (!food) {
      return res.status(404).json({
        success: false,
        message: 'Food donation not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Food claimed successfully',
      data: food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error claiming food',
      error: error.message,
    });
  }
};
