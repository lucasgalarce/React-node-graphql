import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        Users: [User]
        getUser(_id: ID): User
    }

    type User {
        _id: ID
        email: String!
        name: String!
        password: String!
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(_id: ID!, input: UserInput): User
        deleteUser(_id: ID!): User
    }

    input UserInput {
        email: String
        name: String
        password: String
    }

`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
})