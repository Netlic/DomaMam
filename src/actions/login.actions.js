import bcrypt from 'bcryptjs'
import genSalt from '../utils/salt'

export const SET_AUTH = "SET_AUTH"

export const login = (user, pass) => dispatch => {
  const salt = genSalt(user);
  bcrypt.hash(pass, salt, (err, hash) => {
    if (err) {
      //nieco urobit, ak error
    }
    //zalogovat
  })
}
