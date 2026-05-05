import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    
    Name: "John",
    Surname: "Doe",
    Age: 30,
    Job: "Engineer",
   });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});