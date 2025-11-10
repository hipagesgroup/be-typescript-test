import { Controller, Get, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileSystemDbService } from '../services/file-system-db.service';
import { DbExample } from '../models/db-example.model';

@ApiTags('Example')
@Controller()
export class AppController {
  constructor(private readonly fileSystemDb: FileSystemDbService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Save DbExample' })
  @ApiResponse({ status: 200, description: 'Successfully saved' })
  async saveDbExample(): Promise<void> {
    await this.fileSystemDb.save({ id: 100, description: 'Hello' });
  }

  @Get()
  @ApiOperation({ summary: 'Get DbExample' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved', type: [DbExample] })
  async get(): Promise<DbExample[]> {
    return await this.fileSystemDb.get();
  }
}
