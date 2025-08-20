import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'wooden', price: 100 },
        { id: 2, name: 'plastic', price: 200 },
        { id: 3, name: 'metal', price: 300 }        
    ];

    // Filter by name if search query is present
    if(req.query.search) {
        const filterProducts = products.filter(product => 
            product.name.includes(req.query.search) //here we are checking if the name of the product includes the search query
        );
        return res.json(filterProducts);//return is must because we need to stop the execution of the function after sending the response otherwise app crashes
    }
    setTimeout(() => {
        res.json(products);
    }, 3000); // Simulating a delay of 3 seconds
});


const port=process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});