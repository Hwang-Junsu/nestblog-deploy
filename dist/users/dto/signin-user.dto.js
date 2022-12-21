"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignInDto = void 0;
const users_schema_1 = require("./../schema/users.schema");
const swagger_1 = require("@nestjs/swagger");
class UserSignInDto extends (0, swagger_1.PickType)(users_schema_1.User, [
    'email',
    'password',
]) {
}
exports.UserSignInDto = UserSignInDto;
//# sourceMappingURL=signin-user.dto.js.map