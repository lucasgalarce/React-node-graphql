const resolvers = {
    Query: {
        hello() {
            return 'Hello World with GraphQL'
        },
        
    }
}

module.exports = {
    resolvers
}