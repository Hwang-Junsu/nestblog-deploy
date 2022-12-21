import { PostsUpdateDto } from './../dto/posts.update.dto';
import { LikesRepository } from './../../likes/likes.repository';
import { PostsRepository } from './../posts.repository';
import { PostsPostDto } from './../dto/posts.post.dto';
import { User } from './../../users/schema/users.schema';
export declare class PostsService {
    private readonly postsRepository;
    private readonly likesRepository;
    constructor(postsRepository: PostsRepository, likesRepository: LikesRepository);
    getAllPosts(user: User): Promise<any[]>;
    getOnePost(user: User, id: string): Promise<{
        isLike: boolean;
        id: string;
        title: string;
        content: string;
        hashtag: string[];
        likes: number;
        user: User;
        comments: import("../../comments/schema/comments.schema").Comment[];
        createdAt: string;
    }>;
    writePost(user: User, body: PostsPostDto): Promise<{
        id: string;
        title: string;
        content: string;
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
        hashtag: string[];
        isLike: boolean;
        likes: number;
        user: User;
        comments: import("../../comments/schema/comments.schema").Comment[];
        createdAt: string;
    }>;
    likePost(id: string, user: User): Promise<void | import("../../likes/schema/likes.schema").Like>;
}
