"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsPostDto = void 0;
const comments_schema_1 = require("./../schema/comments.schema");
const swagger_1 = require("@nestjs/swagger");
class CommentsPostDto extends (0, swagger_1.PickType)(comments_schema_1.Comment, ['content']) {
}
exports.CommentsPostDto = CommentsPostDto;
//# sourceMappingURL=comments.post.dto.js.map