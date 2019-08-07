// server: nodeJs file, expressJs
const express = require('express');
const app = express();
const bodyParser = require('body-parser')


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  // console.log(req);
  res.send('<h1>The server works</h1>');
});


//Returns Tasks Array As JSON
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

//Push Some Data To Tasks Array And Return It As JSON
app.post('/tasks', (req, res) => {

  tasks.push(req.body);
  res.json(tasks);
})

//Returns Specific Task Using it's Id From Tasks Array As JSON
app.get('/tasks/:id', (req, res) => {

  let requestedId = parseInt(req.originalUrl.slice(7));
  let result = tasks.filter(elem => {
    return elem.id === requestedId;
  });
  res.json(result);
});

app.delete('/tasks/:id', (req, res) => {

  let requestedId = parseInt(req.originalUrl.slice(7));
  let result = tasks.map((elem) => {
    if (elem.id === requestedId) {
       elem = null;
    }
    return elem;
  })
  res.json(result);
});


app.put('/tasks/:id', (req, res) => {

  let requestedId = parseInt(req.originalUrl.slice(7));
  let result = tasks.map((element) => {
    if (element.id === requestedId) {
      element.isCompleted = !element.isCompleted
    }
    return element;
  })
  res.json(result);
});







const PORT = 4000;
app.listen(PORT, () => console.log(`listen to port ${PORT}`));



const tasks = [{
    id: 1,
    title: "Download Zoom",
    isCompleted: false
  },
  {
    id: 2,
    title: "Eat Fried Chicken",
    isCompleted: true
  },
  {
    id: 3,
    title: "Play Games",
    isCompleted: false
  },
  {
    id: 4,
    title: "Go for Shopping",
    isCompleted: true
  },
  {
    id: 5,
    title: "Watch Movie",
    isCompleted: false
  }
]