import { PostsUpdateDto } from './dto/posts.update.dto';
import { Like } from './../likes/schema/likes.schema';
import { User } from './../users/schema/users.schema';
import { Post } from './schema/posts.schema';
import { Model } from 'mongoose';
export declare class PostsRepository {
    private readonly postModel;
    private readonly likeModel;
    constructor(postModel: Model<Post>, likeModel: Model<Like>);
    findAllPosts(): Promise<any | null>;
    findPostById(id: string): Promise<Post | null>;
    create(body: any): Promise<Post | null>;
    deletePost(id: string): Promise<Post>;
    updatePost(id: string, body: PostsUpdateDto): Promise<Post | null>;
    findLikeRelatedByUserId(postId: string): Promise<number | null>;
    findCurrentUserIsLike(postId: string, user: User): Promise<boolean | null>;
    likePost(postId: string, user: User): Promise<Like | void | null>;
}
