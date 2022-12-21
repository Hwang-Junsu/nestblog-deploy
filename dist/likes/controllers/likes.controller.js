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
exports.LikesController = void 0;
const users_schema_1 = require("./../../users/schema/users.schema");
const jwt_guard_1 = require("./../../auth/jwt/jwt.guard");
const likes_service_1 = require("./../services/likes.service");
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../../common/decorators/user.decorator");
let LikesController = class LikesController {
    constructor(likesService) {
        this.likesService = likesService;
    }
    allLikesGet() {
        return this.likesService.allLikesGet();
    }
    postLike(postId, user) {
        return this.likesService.postLike(postId, user);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LikesController.prototype, "allLikesGet", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JWTAuthGuard),
    (0, common_1.Post)(':postId'),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, users_schema_1.User]),
    __metadata("design:returntype", void 0)
], LikesController.prototype, "postLike", null);
LikesController = __decorate([
    (0, common_1.Controller)('likes'),
    __metadata("design:paramtypes", [likes_service_1.LikesService])
], LikesController);
exports.LikesController = LikesController;
//# sourceMappingURL=likes.controller.js.map