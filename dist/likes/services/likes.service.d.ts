import { LikesRepository } from './../likes.repository';
import { User } from './../../users/schema/users.schema';
export declare class LikesService {
    private readonly likesRepository;
    constructor(likesRepository: LikesRepository);
    allLikesGet(): Promise<import("../schema/likes.schema").Like[]>;
    postLike(postId: string, user: User): Promise<void | import("../schema/likes.schema").Like>;
}
