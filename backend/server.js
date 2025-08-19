import express from 'express';

const app = express(); //making of a variable from express 

// app.get('/', (req, res) => { //express serves and listens on a certain route,in this case, the root route
//   res.send('Server Ready!');
// });

//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
  const jokes=[
    {
      id:1,
      title:'joke 1',
      content:'This is the first joke'
    }
    ,
    {
      id:2,
      title:'joke 2',
      content:'This is the second joke'
    },
    {
      id:3,
      title:'joke 3',
      content:'This is the third joke'
    },
    {
      id:4,
      title:'joke 4',
      content:'This is the fourth joke'
    },
    {
      id:5,
      title:'joke 5',
      content:'This is the fifth joke'
    }
  ]
  res.send(jokes); //sending the jokes array as a response
})

const port = process.env.PORT || 3000; //here we are assigning a port to the server, if the environment variable PORT is not set, it will default to 3000
//in production, we need to set the port in the environment variable 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); //this will log the port on which the server is running
});