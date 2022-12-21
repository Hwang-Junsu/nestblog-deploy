import { Post } from './../schema/posts.schema';
declare const PostsPostDto_base: import("@nestjs/common").Type<Pick<Post, "content" | "title" | "hashtag">>;
export declare class PostsPostDto extends PostsPostDto_base {
}
export {};
