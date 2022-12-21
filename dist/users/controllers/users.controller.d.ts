/// <reference types="multer" />
import { UsersService } from './../services/users.service';
import { User } from '../schema/users.schema';
import { UserSignInDto } from '../dto/signin-user.dto';
import { AuthService } from '../../auth/auth.service';
import { UserSignUpDto } from '../dto/signup-user.dto';
import { Request } from 'express';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    getMyProfile(user: User): {
        id: string;
        email: string;
        nickname: string;
        introduce: string;
        profileImage: string;
    };
    getUser(_id: string): Promise<true>;
    register(body: UserSignUpDto): Promise<{
        id: string;
        email: string;
        nickname: string;
        introduce: string;
        profileImage: string;
    }>;
    logIn(data: UserSignInDto): Promise<{
        token: string;
    }>;
    updateUser(user: User, file: Express.Multer.File, { body }: Request): Promise<{
        id: string;
        email: string;
        nickname: string;
        introduce: string;
        profileImage: string;
    }>;
    deleteUser(user: User): Promise<{
        ok: boolean;
    }>;
}
