/// <reference types="multer" />
import { PostsPostDto } from './../dto/posts.post.dto';
import { User } from './../../users/schema/users.schema';
import { PostsService } from './../services/posts.service';
import { Request } from 'express';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllPosts(user: User): Promise<{
        isLike: boolean;
        id: string;
        title: string;
        content: string;
        media: string;
        hashtag: string[];
        likes: number;
        user: User;
        comments: import("../../comments/schema/comments.schema").Comment[];
        createdAt: string;
    }[]>;
    writePost(user: User, file: Express.Multer.File, { body }: Request): Promise<{
        id: string;
        title: string;
        content: string;
        media: string;
        hashtag: string[];
        isLike: boolean;
        likes: number;
        user: User;
        comments: import("../../comments/schema/comments.schema").Comment[];
        createdAt: string;
    }>;
    deletePost(id: string, user: User): Promise<{
        ok: boolean;
    }>;
    updatePost(id: string, body: PostsPostDto, user: User): Promise<{
        id: string;
        title: string;
        content: string;
        media: string;
        hashtag: string[];
        isLike: boolean;
        likes: number;
        user: User;
        comments: import("../../comments/schema/comments.schema").Comment[];
        createdAt: string;
    }>;
    myPost(user: User): Promise<import("../schema/posts.schema").Post[]>;
    getOnePost(user: User, id: string): Promise<{
        isLike: boolean;
        id: string;
        title: string;
        content: string;
        media: string;
        hashtag: string[];
        likes: number;
        user: User;
        comments: import("../../comments/schema/comments.schema").Comment[];
        createdAt: string;
    }>;
    likePost(id: string, user: User): Promise<void | import("../../likes/schema/likes.schema").Like>;
}
