import { User } from './../../users/schema/users.schema';
import { CommentsPostDto } from './../dto/comments.post.dto';
import { CommentsService } from './../services/comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    getAllComments(): Promise<import("../schema/comments.schema").Comment[]>;
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
