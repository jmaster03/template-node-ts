import { model, Schema, Document, Mongoose } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
    email: string;
    password: string;
    encrypPassword(password: string): Promise<string>
    comparePassword(password: string): Promise<Boolean>
};

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    
    password: {
        type: String,
        required: true,
        min: 8,
        select: false
    },

    image: {
        type: String,
        required: false,
        default: 'https://via.placeholder.com/150'
    },

    rememberToken: {
        type: String,
        required: false
    },

    emailVerifiedAt: {
        type: Date,
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    }
});


userSchema.methods.encrypPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};


export default model<IUser>("User", userSchema);
