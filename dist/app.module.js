"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const aws_service_1 = require("./aws.service");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const posts_module_1 = require("./posts/posts.module");
const comments_module_1 = require("./comments/comments.module");
const configuration_module_1 = require("./configuration/configuration.module");
const likes_module_1 = require("./likes/likes.module");
const mongoose = require("mongoose");
let AppModule = class AppModule {
    configure() {
        mongoose.set('debug', true);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.NEST_APP_MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            posts_module_1.PostsModule,
            comments_module_1.CommentsModule,
            configuration_module_1.ConfigurationModule,
            likes_module_1.LikesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [aws_service_1.AwsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map