import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, Matches } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString({ message: 'Username must be a string' })
  readonly username: string;

  @ApiProperty()
  @IsString({ message: 'Email must be a string' })
  readonly email: string;

  @ApiProperty()
  @IsString({ message: 'Password must be a string' })
  @IsOptional()
  readonly password: string;
}
