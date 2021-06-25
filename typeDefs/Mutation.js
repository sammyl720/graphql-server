module.exports = `
  type Mutation{
    login(data: LoginInput): UserOrError!
    addPost(data: AddPostInput): PostOrError!
  }
`