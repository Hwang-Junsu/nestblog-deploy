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
exports.PostsRepository = void 0;
const likes_schema_1 = require("./../likes/schema/likes.schema");
const comments_schema_1 = require("./../comments/schema/comments.schema");
const users_schema_1 = require("./../users/schema/users.schema");
const posts_schema_1 = require("./schema/posts.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose = require("mongoose");
let PostsRepository = class PostsRepository {
    constructor(postModel, likeModel) {
        this.postModel = postModel;
        this.likeModel = likeModel;
    }
    async findAllPosts() {
        const allPosts = await this.postModel
            .find()
            .populate('comments', mongoose.model('comments', comments_schema_1.CommentSchema))
            .populate('user', mongoose.model('users', users_schema_1.UserSchema));
        return allPosts;
    }
    async findPostById(id) {
        const post = await this.postModel
            .findById(id)
            .populate('user', mongoose.model('users', users_schema_1.UserSchema))
            .populate('comments', mongoose.model('comments', comments_schema_1.CommentSchema));
        return post;
    }
    async create(body) {
        const post = await this.postModel.create(body);
        const newPost = await this.postModel
            .findById(post.id)
            .populate('user', mongoose.model('users', users_schema_1.UserSchema))
            .populate('comments', mongoose.model('comments', comments_schema_1.CommentSchema));
        return newPost;
    }
    async deletePost(id) {
        return await this.postModel.findOneAndDelete({ _id: id });
    }
    async updatePost(id, body) {
        const post = await this.findPostById(id);
        const { title, content, hashtag } = body;
        if (title)
            post.title = title;
        if (content)
            post.content = content;
        if (hashtag)
            post.hashtag = hashtag;
        const newPost = post.save();
        return newPost;
    }
    async findLikeRelatedByUserId(postId) {
        const post = await this.postModel.findById(postId);
        const likes = await this.likeModel.count({ postId: post._id });
        return likes;
    }
    async findCurrentUserIsLike(postId, user) {
        const post = await this.postModel.findById(postId);
        const isLike = await this.likeModel.exists({
            userId: user._id,
            postId: post._id,
        });
        return isLike;
    }
    async likePost(postId, user) {
        const targetPost = await this.postModel.findById(postId);
        const existsLike = await this.likeModel.findOne({
            postId: targetPost._id,
            userId: user._id,
        });
        if (Boolean(existsLike)) {
            await this.likeModel.deleteOne({ _id: existsLike._id });
            targetPost.likes -= 1;
            targetPost.save();
            return;
        }
        targetPost.likes += 1;
        targetPost.save();
        return await this.likeModel.create({
            postId: targetPost._id,
            userId: user._id,
        });
    }
};
PostsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(posts_schema_1.Post.name)),
    __param(1, (0, mongoose_1.InjectModel)(likes_schema_1.Like.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], PostsRepository);
exports.PostsRepository = PostsRepository;
//# sourceMappingURL=posts.repository.js.map