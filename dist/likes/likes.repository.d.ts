import { Post } from './../posts/schema/posts.schema';
import { Like } from './schema/likes.schema';
import { User } from './../users/schema/users.schema';
import { Model } from 'mongoose';
export declare class LikesRepository {
    private readonly likesModel;
    private readonly postsModel;
    constructor(likesModel: Model<Like>, postsModel: Model<Post>);
    findAllPosts(): Promise<Like[] | null>;
    findLikeRelatedByUserId(postId: string): Promise<number | null>;
    findCurrentUserIsLike(postId: string, user: User): Promise<boolean | null>;
    create(postId: string, user: User): Promise<Like | void | null>;
}
