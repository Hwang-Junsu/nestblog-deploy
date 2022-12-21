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
exports.CommentSchema = exports._CommentSchema = exports.Comment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
    collection: 'comments',
};
let Comment = class Comment extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        required: true,
        ref: 'posts',
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Comment.prototype, "postId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        required: true,
        ref: 'users',
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Comment.prototype, "userId", void 0);
Comment = __decorate([
    (0, mongoose_1.Schema)(options)
], Comment);
exports.Comment = Comment;
exports._CommentSchema = mongoose_1.SchemaFactory.createForClass(Comment);
exports._CommentSchema.virtual('readOnlyData').get(function () {
    var _a;
    return {
        id: this.id,
        content: this.content,
        user: (_a = this.user) === null || _a === void 0 ? void 0 : _a.readOnlyData,
        createdAt: this.createdAt,
    };
});
exports._CommentSchema.virtual('user', {
    ref: 'users',
    localField: 'userId',
    foreignField: '_id',
    justOne: true,
});
exports._CommentSchema.set('toObject', { virtuals: true });
exports._CommentSchema.set('toJSON', { virtuals: true });
exports.CommentSchema = exports._CommentSchema;
//# sourceMappingURL=comments.schema.js.map