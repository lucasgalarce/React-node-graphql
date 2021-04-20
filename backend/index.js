const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.use(require('./routes/index'));

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(3000);
console.log('server on port 3000');