const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
const port = process.env.PORT || 8002;

const items = [
    { name: "pancake", price: 5 },
    { name: "Scallion Pancakes", price: 6 },
    { name: "coffee", price: 3 },
    { name: "Kung Pao Chicken", price: 15 },
    { name: "Beef and Kale Stir-Fry", price: 15 },
    { name: "Pizza", price: 12 },
    { name: "tacos", price: 8 },
    { name: "Beef burger", price: 8 },
    { name: "vegetable salads", price: 12 }
];

app.use(bodyParser.urlencoded({ extended: true }));

// Handler for POST requests
app.post('/orderTotal', (req, res) => {
    let totalCost = 0;
    for (let i = 1; i <= items.length; i++) {
        let quantity = parseInt(req.body[`quantity${i}`]);
        let price = items[i - 1].price; // The index starts at 0
        if (!isNaN(quantity)) {
            totalCost += quantity * price;
        }
    }
    console.log("Total Cost:", totalCost); // Add log to ensure the value of totalCost
    res.render('orderTotal', { totalCost });
});


// GET request handler, used to render the order page
app.get('/order', (req, res) => {
    res.render('order', { items: items });
});

//  render the order total amount page
app.get('/orderTotal', (req, res) => {
    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
        let quantity = parseInt(req.query[`quantity${i}`]);
        let price = items[i].price;
        totalCost += quantity * price;
    }
    console.log("Total Cost:", totalCost); 
    
    // Render the order total amount page and pass the totalCost variable
    res.render('orderTotal', { totalCost });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
