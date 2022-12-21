/// <reference types="multer" />
import { AwsService } from './../../aws.service';
import { UserSignUpDto } from './../dto/signup-user.dto';
import { UsersRepository } from './../users.repository';
import { User } from './../schema/users.schema';
import { UserUpdateDto } from './../dto/update-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    private readonly awsService;
    constructor(usersRepository: UsersRepository, awsService: AwsService);
    getUser(_id: string): Promise<true>;
    register(body: UserSignUpDto): Promise<{
        id: string;
        email: string;
        nickname: string;
        introduce: string;
        profileImage: string;
    }>;
    updateProfile(user: User, file: Express.Multer.File, body: UserUpdateDto): Promise<{
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
