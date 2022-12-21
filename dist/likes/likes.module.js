"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesModule = void 0;
const posts_schema_1 = require("./../posts/schema/posts.schema");
const likes_repository_1 = require("./likes.repository");
const likes_schema_1 = require("./schema/likes.schema");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const likes_controller_1 = require("./controllers/likes.controller");
const likes_service_1 = require("./services/likes.service");
let LikesModule = class LikesModule {
};
LikesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: likes_schema_1.Like.name, schema: likes_schema_1.LikesSchema },
                { name: posts_schema_1.Post.name, schema: posts_schema_1.PostSchema },
            ]),
        ],
        controllers: [likes_controller_1.LikesController],
        providers: [likes_service_1.LikesService, likes_repository_1.LikesRepository],
        exports: [likes_service_1.LikesService, likes_repository_1.LikesRepository],
    })
], LikesModule);
exports.LikesModule = LikesModule;
//# sourceMappingURL=likes.module.js.map