const typeDefs = `
    type User {
        _id: ID
        first_name: String
        last_name: String
        username: String
        email: String
    }

    type Book {
        _id: ID
        title: String
        author: String
        genre: String
        price: Float
        quantity: Int
    }

    type Query {
        users: [User]
        books: [Book]
    }
`;

module.exports = typeDefs;
