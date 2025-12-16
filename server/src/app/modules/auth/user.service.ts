import { User } from "./user.model";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { config } from "../../config";


const registerNewUser = async (
  username: string,
  email: string,
  password: string
) => {
      const existingUser = await User.findOne({$or :[{email}, {username}]})

      if(existingUser){
        throw new Error("User with this email or username. already exists.")
      }

  const hashedPassword = await bcrypt.hash(password, 10)

    //   create new user
    const user = new User({
        username,
        email,
        password:hashedPassword
    })

    await user.save()
    return user

};


const loginUser = async (email:string, password:string) => {
    const user = await User.findOne({email})

    if(!user){
      throw new Error('Invalid email or password. User not found!')
    }

    // verify password
    const isPassword = await bcrypt.compare(password, user.password)
    if(!isPassword){
      throw new Error('Invalid password')
    }

    const token = jwt.sign({
      // header
      userId:user._id,
      role:user.role,
    },
    config.jwt_secret as string,   // payload
    {expiresIn:'7d'}   // expire date
  )

  return {
    user,
    token
  }
}



export const userService = {
    registerNewUser,
    loginUser
}
