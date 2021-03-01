import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Johnny Doe',
    email: 'Johnny@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Roberto De Niro',
    email: 'Roberto@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
