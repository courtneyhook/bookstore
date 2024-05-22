const typeDefs = `
    type User {
        _id: ID
        first_name: String
        last_name: String
        username: String
        email: String
        orders: [Order]
    }

    type Book {
        _id: ID
        title: String
        author: String
        genre: String
        price: Float
        quantity: Int
    }

    type Order {
        _id: ID
        total: Float
        books: [Book]
        users: User
    }

    type Query {
        users: [User]
        books: [Book]
        orders: [Order]
    }
`;

module.exports = typeDefs;
