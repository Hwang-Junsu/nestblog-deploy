import { Comment } from './../../comments/schema/comments.schema';
import { User } from './../../users/schema/users.schema';
import { Document, Types } from 'mongoose';
export declare class Post extends Document {
    title: string;
    author: string;
    content: string;
    media: string;
    hashtag: string[];
    isLike: boolean;
    likes: number;
    userId: Types.ObjectId;
    readonly readOnlyData: {
        id: string;
        title: string;
        content: string;
        media: string;
        hashtag: string[];
        isLike: boolean;
        likes: number;
        user: User;
        comments: Comment[];
        createdAt: string;
    };
    readonly user: User;
    readonly comments: Comment[];
    readonly createdAt: string;
}
export declare const _PostSchema: import("mongoose").Schema<Post, import("mongoose").Model<Post, any, any>, undefined, {}>;
export declare const PostSchema: import("mongoose").Schema<Post, import("mongoose").Model<Post, any, any>, undefined, {}>;
