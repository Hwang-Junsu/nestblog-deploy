/// <reference types="multer" />
import { PostsUpdateDto } from './../dto/posts.update.dto';
import { LikesRepository } from './../../likes/likes.repository';
import { PostsRepository } from './../posts.repository';
import { PostsPostDto } from './../dto/posts.post.dto';
import { User } from './../../users/schema/users.schema';
import { AwsService } from 'src/aws.service';
export declare class PostsService {
    private readonly postsRepository;
    private readonly likesRepository;
    private readonly awsService;
    constructor(postsRepository: PostsRepository, likesRepository: LikesRepository, awsService: AwsService);
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
    writePost(user: User, file: Express.Multer.File, body: PostsPostDto): Promise<{
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
    deletePost(user: User, id: string): Promise<{
        ok: boolean;
    }>;
    updatePost(user: User, id: string, body: PostsUpdateDto): Promise<{
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
    likePost(id: string, user: User): Promise<void | import("../../likes/schema/likes.schema").Like>;
    myPost(user: User): Promise<import("../schema/posts.schema").Post[]>;
}
