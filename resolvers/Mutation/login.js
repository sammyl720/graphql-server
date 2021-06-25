const { generateId } = require("../../util/generateIds")
require('dotenv').config()
const jwt = require('jsonwebtoken')
const { users } = require("../../db")

module.exports = (parent, { data: { email, password }}, { headers, from}, info) => {
  // backend login logi
  console.log(headers, from)
  const errors = []
  if(!email){
    errors.push('Please provide an email')
  }

  if(!password){
    errors.push('Please provide a password')
  }

  if(errors.length > 0){
    return {
      message: errors[0],
      errors
    }
  }

  const id = generateId()
  const token = jwt.sign({ id, email}, process.env.JWT_SECRET, { expiresIn: '2 days'})
  const lastLogin = new Date().toDateString();
  let user = {
    id,
    email,
    lastLogin,
    token,
    password,
    posts: []
  }
  
  // check password and encrpt
  const found = users.find(u => u.email == email)
  if(found){
    user = { ...found, lastLogin }
  } else {
    users.push(user)
  }
  
  return user
}