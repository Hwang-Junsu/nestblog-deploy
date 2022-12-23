"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsPostDto = void 0;
const posts_schema_1 = require("./../schema/posts.schema");
const swagger_1 = require("@nestjs/swagger");
class PostsPostDto extends (0, swagger_1.PickType)(posts_schema_1.Post, [
    'title',
    'content',
    'hashtag',
    'media',
    'author',
    'userId',
]) {
}
exports.PostsPostDto = PostsPostDto;
//# sourceMappingURL=posts.post.dto.js.map