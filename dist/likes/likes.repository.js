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
exports.LikesRepository = void 0;
const posts_schema_1 = require("./../posts/schema/posts.schema");
const likes_schema_1 = require("./schema/likes.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LikesRepository = class LikesRepository {
    constructor(likesModel, postsModel) {
        this.likesModel = likesModel;
        this.postsModel = postsModel;
    }
    async findAllPosts() {
        const allLikes = await this.likesModel.find();
        return allLikes;
    }
    async findLikeRelatedByUserId(postId) {
        const post = await this.postsModel.findById(postId);
        const likes = await this.likesModel.count({ postId: post._id });
        return likes;
    }
    async findCurrentUserIsLike(postId, user) {
        const post = await this.postsModel.findById(postId);
        const isLike = await this.likesModel.exists({
            userId: user._id,
            postId: post._id,
        });
        return isLike;
    }
    async create(postId, user) {
        const targetPost = await this.postsModel.findById(postId);
        const existsLike = await this.likesModel.findOne({
            postId: targetPost._id,
            userId: user._id,
        });
        if (existsLike) {
            this.likesModel.deleteOne({ _id: existsLike._id });
            return;
        }
        return await this.likesModel.create({
            postId: targetPost._id,
            userId: user._id,
        });
    }
};
LikesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(likes_schema_1.Like.name)),
    __param(1, (0, mongoose_1.InjectModel)(posts_schema_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], LikesRepository);
exports.LikesRepository = LikesRepository;
//# sourceMappingURL=likes.repository.js.map