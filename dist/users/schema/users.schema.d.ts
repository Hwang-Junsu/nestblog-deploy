import { Document } from 'mongoose';
export declare class User extends Document {
    email: string;
    password: string;
    nickname: string;
    introduce: string;
    profileImage: string;
    readonly readOnlyData: {
        id: string;
        email: string;
        nickname: string;
        introduce: string;
        profileImage: string;
    };
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any>, undefined, {}>;
