"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const path = require("path");
const app_module_1 = require("./app.module");
const PORT = 80;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useStaticAssets(path.join(__dirname, './common', 'uploads'), {
        prefix: '/media',
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('My fullstack project')
        .setDescription('My fullstack project')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.enableCors({
        origin: true,
        credentials: true,
    });
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map