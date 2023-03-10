"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
const multer_1 = require("@nestjs/platform-express/multer");
const config_1 = require("@nestjs/config");
const likes_module_1 = require("./../likes/likes.module");
const comments_schema_1 = require("./../comments/schema/comments.schema");
const users_schema_1 = require("./../users/schema/users.schema");
const posts_repository_1 = require("./posts.repository");
const posts_schema_1 = require("./schema/posts.schema");
const mongoose_1 = require("@nestjs/mongoose");
const posts_service_1 = require("./services/posts.service");
const posts_controller_1 = require("./controllers/posts.controller");
const common_1 = require("@nestjs/common");
const likes_schema_1 = require("../likes/schema/likes.schema");
const multer_2 = require("multer");
const aws_service_1 = require("../aws.service");
let PostsModule = class PostsModule {
};
PostsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            multer_1.MulterModule.register({
                storage: (0, multer_2.memoryStorage)(),
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: posts_schema_1.Post.name, schema: posts_schema_1.PostSchema },
                { name: users_schema_1.User.name, schema: users_schema_1.UserSchema },
                { name: comments_schema_1.Comment.name, schema: comments_schema_1.CommentSchema },
                { name: likes_schema_1.Like.name, schema: likes_schema_1.LikesSchema },
            ]),
            (0, common_1.forwardRef)(() => likes_module_1.LikesModule),
        ],
        controllers: [posts_controller_1.PostsController],
        providers: [posts_service_1.PostsService, posts_repository_1.PostsRepository, aws_service_1.AwsService],
        exports: [posts_service_1.PostsService, posts_repository_1.PostsRepository],
    })
], PostsModule);
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map