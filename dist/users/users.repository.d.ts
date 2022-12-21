import { UserUpdateDto } from './dto/update-user.dto';
import { UserSignUpDto } from './dto/signup-user.dto';
import { User } from './schema/users.schema';
import { Model } from 'mongoose';
export declare class UsersRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findUserByEmail(email: string): Promise<User | null>;
    existsByEmail(email: string): Promise<boolean>;
    create(user: UserSignUpDto): Promise<User>;
    existsById(id: string): Promise<boolean>;
    findUserByIdWithoutPassword(userId: string): Promise<User | null>;
    findByIdAndUpdateProfile(userId: string, imageUrl: string, body: UserUpdateDto): Promise<{
        id: string;
        email: string;
        nickname: string;
        introduce: string;
        profileImage: string;
    }>;
    deleteUserById(user: User): Promise<void>;
}
