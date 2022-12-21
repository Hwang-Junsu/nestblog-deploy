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
exports.CommentsController = void 0;
const users_schema_1 = require("./../../users/schema/users.schema");
const jwt_guard_1 = require("./../../auth/jwt/jwt.guard");
const comments_post_dto_1 = require("./../dto/comments.post.dto");
const comments_service_1 = require("./../services/comments.service");
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const user_decorator_1 = require("../../common/decorators/user.decorator");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    getAllComments() {
        return this.commentsService.getComments();
    }
    writeComment(user, postId, body) {
        return this.commentsService.writeComment(user, postId, body);
    }
    updateComment(user, id, body) {
        return this.commentsService.updateComment(user, id, body);
    }
    deleteComment(user, id) {
        return this.commentsService.deleteComment(user, id);
    }
};
__decorate([
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getAllComments", null);
__decorate([
    (0, decorators_1.UseGuards)(jwt_guard_1.JWTAuthGuard),
    (0, common_1.Post)(':postId'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, decorators_1.Param)('postId')),
    __param(2, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_schema_1.User, String, comments_post_dto_1.CommentsPostDto]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "writeComment", null);
__decorate([
    (0, decorators_1.UseGuards)(jwt_guard_1.JWTAuthGuard),
    (0, decorators_1.Patch)(':id'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, decorators_1.Param)('id')),
    __param(2, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_schema_1.User, String, comments_post_dto_1.CommentsPostDto]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "updateComment", null);
__decorate([
    (0, decorators_1.UseGuards)(jwt_guard_1.JWTAuthGuard),
    (0, decorators_1.Delete)(':id'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_schema_1.User, String]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "deleteComment", null);
CommentsController = __decorate([
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map