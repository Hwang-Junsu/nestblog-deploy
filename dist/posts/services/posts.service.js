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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const likes_repository_1 = require("./../../likes/likes.repository");
const posts_repository_1 = require("./../posts.repository");
const common_1 = require("@nestjs/common");
const aws_service_1 = require("../../aws.service");
let PostsService = class PostsService {
    constructor(postsRepository, likesRepository, awsService) {
        this.postsRepository = postsRepository;
        this.likesRepository = likesRepository;
        this.awsService = awsService;
    }
    async getAllPosts(user) {
        const allPosts = await this.postsRepository.findAllPosts();
        const addIsLikePosts = await Promise.all(allPosts.map(async (post) => {
            const isLike = await this.likesRepository.findCurrentUserIsLike(post._id, user);
            const newPost = Object.assign(Object.assign({}, post.toObject().readOnlyData), { isLike });
            return newPost;
        }));
        return addIsLikePosts;
    }
    async getOnePost(user, id) {
        const post = await this.postsRepository.findPostById(id);
        const isLike = await this.likesRepository.findCurrentUserIsLike(post._id, user);
        return Object.assign(Object.assign({}, post.toObject().readOnlyData), { isLike });
    }
    async writePost(user, file, body) {
        const uploadAwsS3 = await this.awsService.uploadFileToS3('media', file);
        const mediaUrl = this.awsService.getAwsS3FileUrl(uploadAwsS3.key);
        const post = await this.postsRepository.create(Object.assign(Object.assign({}, body), { media: mediaUrl, author: user.nickname, userId: user._id }));
        return post.readOnlyData;
    }
    async deletePost(user, id) {
        const post = await this.postsRepository.findPostById(id);
        if (String(user._id) !== String(post.userId)) {
            throw new common_1.UnauthorizedException('No matched userId');
        }
        await this.postsRepository.deletePost(id);
        return { ok: true };
    }
    async updatePost(user, id, body) {
        const post = await this.postsRepository.findPostById(id);
        if (String(post.userId) !== String(user.id)) {
            throw new common_1.UnauthorizedException('No matched userId');
        }
        return (await this.postsRepository.updatePost(id, body)).readOnlyData;
    }
    async likePost(id, user) {
        return await this.postsRepository.likePost(id, user);
    }
    async myPost(user) {
        return await this.postsRepository.findMyPosts(user);
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [posts_repository_1.PostsRepository,
        likes_repository_1.LikesRepository,
        aws_service_1.AwsService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map