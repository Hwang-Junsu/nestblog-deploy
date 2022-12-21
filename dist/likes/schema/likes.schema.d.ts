import { Document, Types } from 'mongoose';
export declare class Like extends Document {
    postId: Types.ObjectId;
    userId: Types.ObjectId;
}
export declare const LikesSchema: import("mongoose").Schema<Like, import("mongoose").Model<Like, any, any>, undefined, {}>;
