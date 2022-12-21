import { UsersRepository } from './../users/users.repository';
import { UserSignInDto } from './../users/dto/signin-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersRepository;
    private readonly jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    jwtLogIn(data: UserSignInDto): Promise<{
        token: string;
    }>;
}
