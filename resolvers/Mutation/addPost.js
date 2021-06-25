const { users } = require("../../db")
const { generateId } = require("../../util/generateIds")

module.exports = (parent, { data: { text }}, { payload }, info) => {
    console.log(payload)
    if(!payload || !payload.email){
      return { message: 'Please login first', errors: ['Please login first'] }
    }
    const currentUser = users.find(u => u.id == payload.id )
    console.log(currentUser)
    if(!currentUser){
      return { message: 'Please login first', errors: ['Please login first'] }
    }

    if(!text){
      return { message: 'Please provide post text', errors: ['Please provide post text'] }

    }
    const newPost = {
      text,
      userId: currentUser.id,
      created_on: new Date().toDateString(),
      id: generateId()
    }
    currentUser.posts.push(newPost)
    return newPost
  }