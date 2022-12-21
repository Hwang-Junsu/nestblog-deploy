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
exports.UsersService = void 0;
const aws_service_1 = require("./../../aws.service");
const users_repository_1 = require("./../users.repository");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository, awsService) {
        this.usersRepository = usersRepository;
        this.awsService = awsService;
    }
    async getUser(_id) {
        const findUser = await this.usersRepository.existsById(_id);
        if (!findUser) {
            throw new common_1.NotFoundException('not exist user');
        }
        return findUser;
    }
    async register(body) {
        const { email, nickname, password, introduce } = body;
        const isExistEmail = await this.usersRepository.existsByEmail(email);
        if (isExistEmail) {
            throw new common_1.BadRequestException('Email already exist');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.usersRepository.create({
            email,
            nickname,
            introduce,
            password: hashedPassword,
        });
        return user.readOnlyData;
    }
    async updateProfile(user, file, body) {
        const uploadAwsS3 = await this.awsService.uploadFileToS3('profile', file);
        const imageUrl = this.awsService.getAwsS3FileUrl(uploadAwsS3.key);
        const newProfile = await this.usersRepository.findByIdAndUpdateProfile(user.id, imageUrl, body);
        return newProfile;
    }
    async deleteUser(user) {
        await this.usersRepository.deleteUserById(user);
        return { ok: true };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        aws_service_1.AwsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map