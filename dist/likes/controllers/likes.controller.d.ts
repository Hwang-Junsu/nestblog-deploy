import { User } from './../../users/schema/users.schema';
import { LikesService } from './../services/likes.service';
export declare class LikesController {
    private readonly likesService;
    constructor(likesService: LikesService);
    allLikesGet(): Promise<import("../schema/likes.schema").Like[]>;
    postLike(postId: string, user: User): Promise<void | import("../schema/likes.schema").Like>;
}
