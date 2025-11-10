import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { FileSystemDbService } from './services/file-system-db.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [FileSystemDbService],
})
export class AppModule {}
