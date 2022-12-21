import { User } from './../schema/users.schema';
declare const UserUpdateDto_base: import("@nestjs/common").Type<Pick<User, "nickname" | "introduce">>;
export declare class UserUpdateDto extends UserUpdateDto_base {
}
export {};
