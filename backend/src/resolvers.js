// Mongoose Model
import User from "./models/user";
import bcrypt from 'bcrypt'

export const resolvers = {
    Query: {
        async Users() {
            return await User.find();
        },
        async getUser(_, {_id}) {
            return await User.findById(_id);
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            
            const { email, name, password } = input
            
            const foundUser = await User.find({ email });
            
            if (foundUser.length > 0) throw new Error('Email is already in use')

            const hashedPassword = await bcrypt.hash(password, 10);

            let newUser = {
                email,
                name,
                password: hashedPassword
            }

            const res = await User.create(newUser);
            
            return res
        },
        async updateUser(_, {_id, input}) {
            return await User.findByIdAndUpdate(_id, input, {new: true});
        },
        async deleteUser(_, {_id}) {
            return await User.findByIdAndDelete(_id);
        }
    }
};