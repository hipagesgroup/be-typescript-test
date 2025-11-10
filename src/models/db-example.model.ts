import { ApiProperty } from '@nestjs/swagger';

export class DbExample {
  @ApiProperty({ example: 100, description: 'The unique identifier' })
  id: number;

  @ApiProperty({ example: 'Hello', description: 'The description text' })
  description: string;
}
