"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const posts_repository_1 = require("./../../posts/posts.repository");
const users_schema_1 = require("./../../users/schema/users.schema");
const mongoose_1 = require("mongoose");
const comments_schema_1 = require("./../schema/comments.schema");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let CommentsService = class CommentsService {
    constructor(commentModel, postRepository) {
        this.commentModel = commentModel;
        this.postRepository = postRepository;
    }
    async getComments() {
        return await this.commentModel
            .find()
            .populate('user', mongoose.model('users', users_schema_1.UserSchema));
    }
    async writeComment(user, postId, body) {
        const targetPost = await this.postRepository.findPostById(postId);
        const comment = await this.commentModel.create(Object.assign(Object.assign({}, body), { postId: targetPost._id, userId: user.id }));
        const newComment = await this.commentModel
            .findById(comment.id)
            .populate('user', mongoose.model('users', users_schema_1.UserSchema));
        return newComment.readOnlyData;
    }
    async updateComment(user, id, body) {
        const comment = await this.commentModel.findById(id);
        if (comment.userId !== user.id) {
            throw new common_1.UnauthorizedException('No matched userId');
        }
        const { content } = body;
        comment.content = content;
        await comment.save();
        const populatedComment = await this.commentModel
            .findById(comment.id)
            .populate('user', mongoose.model('users', users_schema_1.UserSchema));
        return populatedComment.readOnlyData;
    }
    async deleteComment(user, id) {
        const comment = await this.commentModel.findById(id);
        if (comment.userId !== user.id) {
            throw new common_1.UnauthorizedException('No matched userId');
        }
        return await this.commentModel.deleteOne({ _id: id });
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(comments_schema_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        posts_repository_1.PostsRepository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map