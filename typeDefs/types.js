module.exports = `
type User {
  id:ID!
  email: String!
  lastLogin: String!
  token: String!
  posts: [Post]
}

type Error {
  message: String!
  errors: [String]
}

type Post {
  id:ID!
  text: String!
  created_on: String!
  userId: ID!
}
`