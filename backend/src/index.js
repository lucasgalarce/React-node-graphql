import express from 'express';
import graphqlHTTP from "express-graphql";
import schema from "./schema";

import { connect } from "./database";

// Initializations
const app = express();
connect();

// Settings
app.set('port', process.env.PORT || 4000);

// GraphQl
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
}))

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
