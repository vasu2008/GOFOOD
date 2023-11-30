// db.js
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Vasu2008:Vasudev20082001@cluster0.dwora0r.mongodb.net/Gofood?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    const foodItemsCollection =  mongoose.connection.db.collection("food_items");
    const foodItems = await foodItemsCollection.find({}).toArray();
    const foodCategory =  mongoose.connection.db.collection("food_category");
    const foodCat = await foodCategory.find({}).toArray();
    
    
    global.food_category = foodCat;
    console.log(global.food_category)
    global.food_items = foodItems;
    console.log(global.food_items)
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if unable to connect
    
  }
};

module.exports = connectToMongoDB;




    
