"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateDto = void 0;
const users_schema_1 = require("./../schema/users.schema");
const swagger_1 = require("@nestjs/swagger");
class UserUpdateDto extends (0, swagger_1.PickType)(users_schema_1.User, [
    'introduce',
    'nickname',
]) {
}
exports.UserUpdateDto = UserUpdateDto;
//# sourceMappingURL=update-user.dto.js.map