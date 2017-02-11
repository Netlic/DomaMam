import bcrypt from 'bcryptjs'

export const login = (user, pass) => dispatch => {
  bcrypt.hash(pass, () => {
    
  })
}
