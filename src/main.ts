import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { appConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const port = appConfig.port;
  await app.listen(port);


  console.log(`
    ==============================
    🚀 Application Configuration 🚀
    ==============================
    PORT         : ${port}
    Server Type  : ${appConfig.serverType}
    ==============================
  `);
}

bootstrap();
