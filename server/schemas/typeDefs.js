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
        image: String
        title: String
        author: String
        genre: [String]
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
        orders(userId: ID!): [Order]
        user(userId: ID!): User
    }

    type Mutation {
        addBook(image: String!, title: String!, author: String!, genre: String!, price: Float!, quantity: Int!): Book
        addUser(first_name:String!, last_name: String!, username: String!, email: String!): User
    }
`;

module.exports = typeDefs;
