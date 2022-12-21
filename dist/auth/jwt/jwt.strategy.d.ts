import { UsersRepository } from './../../users/users.repository';
import { Payload } from './jwt.payload';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    validate(payload: Payload): Promise<import("../../users/schema/users.schema").User>;
}
export {};
