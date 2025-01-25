const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true})); 
app.use(express.json()); 

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob1' },
];


app.listen(port, () => { 
    console.log(`El servidor se está ejecutando en: http://localhost:${port}`); 
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// Create a new user
app.post('/users',(req, res) => { 

    let items = users.map(item => item.id); 

    let newId = items.length > 0 ? Math.max.apply(Math, items) + 1 : 1; 
console.log(req.body);
    let newItem = { 
        id: newId, 
        name: req.body.name
    } 

    users.push(newItem); 

    res.status(201).json({ 
        'mensaje': "creado exitosamente" 
    }); 
});
