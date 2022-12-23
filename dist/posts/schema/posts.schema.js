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
exports.PostSchema = exports._PostSchema = exports.Post = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
};
let Post = class Post extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], Post.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "media", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    (0, class_validator_1.IsOptional)({ each: true }),
    __metadata("design:type", Array)
], Post.prototype, "hashtag", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Post.prototype, "isLike", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Post.prototype, "likes", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        required: true,
        ref: 'users',
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Post.prototype, "userId", void 0);
Post = __decorate([
    (0, mongoose_1.Schema)(options)
], Post);
exports.Post = Post;
exports._PostSchema = mongoose_1.SchemaFactory.createForClass(Post);
exports._PostSchema.virtual('readOnlyData').get(function () {
    var _a;
    return {
        id: this.id,
        title: this.title,
        content: this.content,
        media: this.media,
        hashtag: this.hashtag,
        isLike: this.isLike,
        likes: this.likes,
        user: (_a = this.user) === null || _a === void 0 ? void 0 : _a.readOnlyData,
        comments: this.comments.map((comment) => comment.readOnlyData),
        createdAt: this.createdAt,
    };
});
exports._PostSchema.virtual('comments', {
    ref: 'comments',
    localField: '_id',
    foreignField: 'postId',
});
exports._PostSchema.virtual('user', {
    ref: 'users',
    localField: 'userId',
    foreignField: '_id',
    justOne: true,
});
exports._PostSchema.set('toObject', { virtuals: true });
exports._PostSchema.set('toJSON', { virtuals: true });
exports.PostSchema = exports._PostSchema;
//# sourceMappingURL=posts.schema.js.map