const express = require('express');
const cors = require ('cors');
const fetch = (...args) =>
import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();

const port = 5000;

//https://opentdb.com/api.php?amount=10&category=24&difficulty={selectDifficulty}&type=boolean
//https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=boolean

// const makeURL = (difficulty) => {
//     return `https://opentdb.com/api.php?amount=10&category=24&difficulty=${difficulty}&type=boolean`
// }
const URL = `https://opentdb.com/api.php?amount=10&category=24&difficulty=medium`


app.get('/', (req, res) => {
    const d = new Date();
    res.json({ currentTime: d.toTimeString() });
    console.log('Received GET request...');
});


// async function fetchData() {
//     // Use fetch to call the api with the url
//     const response = await fetch(URL); 
//     // Storing data in form of JSON
//     let data = await response.json(); 
//     console.log(data);
//     // add the return for the function
//     return data;
//   };

app.get('/quiz', cors(), (req, res) => {
    fetch(URL)
    .then(res => { return res.json(); })
    .then(data => {
      console.log("data from fetch:", data)
     res.json(data);
})
  .catch(err => {
    res.redirect('/error')
  });

});


app.listen(port,console.log(
    `Server started on port ${port}`));