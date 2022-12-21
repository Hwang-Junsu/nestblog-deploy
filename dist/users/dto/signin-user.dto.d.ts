import { User } from './../schema/users.schema';
declare const UserSignInDto_base: import("@nestjs/common").Type<Pick<User, "email" | "password">>;
export declare class UserSignInDto extends UserSignInDto_base {
}
export {};
