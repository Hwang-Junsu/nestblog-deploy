import { PostsRepository } from './../../posts/posts.repository';
import { User } from './../../users/schema/users.schema';
import { Model } from 'mongoose';
import { Comment } from './../schema/comments.schema';
import { CommentsPostDto } from '../dto/comments.post.dto';
export declare class CommentsService {
    private commentModel;
    private readonly postRepository;
    constructor(commentModel: Model<Comment>, postRepository: PostsRepository);
    getComments(): Promise<Comment[]>;
    writeComment(user: User, postId: string, body: CommentsPostDto): Promise<{
        id: string;
        content: string;
        user: User;
        createdAt: string;
    }>;
    updateComment(user: User, id: string, body: CommentsPostDto): Promise<{
        id: string;
        content: string;
        user: User;
        createdAt: string;
    }>;
    deleteComment(user: User, id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
