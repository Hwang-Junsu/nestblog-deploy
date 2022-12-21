import { User } from './../../users/schema/users.schema';
import { Document, Types } from 'mongoose';
export declare class Comment extends Document {
    content: string;
    postId: Types.ObjectId;
    userId: Types.ObjectId;
    readonly readOnlyData: {
        id: string;
        content: string;
        user: User;
        createdAt: string;
    };
    readonly user: User;
    readonly createdAt: string;
}
export declare const _CommentSchema: import("mongoose").Schema<Comment, import("mongoose").Model<Comment, any, any>, undefined, {}>;
export declare const CommentSchema: import("mongoose").Schema<Comment, import("mongoose").Model<Comment, any, any>, undefined, {}>;
