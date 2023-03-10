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
exports.UsersRepository = void 0;
const users_schema_1 = require("./schema/users.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UsersRepository = class UsersRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findUserByEmail(email) {
        const user = await this.userModel.findOne({ email });
        return user;
    }
    async existsByEmail(email) {
        try {
            const result = await this.userModel.exists({ email });
            return Boolean(result);
        }
        catch (error) {
            throw new common_1.HttpException('db error', 400);
        }
    }
    async create(user) {
        return await this.userModel.create(user);
    }
    async existsById(id) {
        try {
            const findUser = await this.userModel.findById(id);
            return Boolean(findUser);
        }
        catch (error) {
            throw new common_1.HttpException('db error', 400);
        }
    }
    async findUserByIdWithoutPassword(userId) {
        const user = await this.userModel.findById(userId).select('-password');
        return user;
    }
    async findByIdAndUpdateProfile(userId, imageUrl, body) {
        const { introduce, nickname } = body;
        const user = await this.userModel.findById(userId);
        if (introduce)
            user.introduce = introduce;
        if (nickname)
            user.nickname = nickname;
        if (imageUrl)
            user.profileImage = imageUrl;
        const newProfile = await user.save();
        return newProfile.readOnlyData;
    }
    async deleteUserById(user) {
        await this.userModel.findOneAndDelete({ _id: user._id });
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map