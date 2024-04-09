import { Injectable, UnauthorizedException, Req } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import Configuration from 'config/index';
import { UserService } from 'src/modules/user/service/user.service';

const { JWT_SECRET_TOKEN } = Configuration().JWT;

/**
 * Validates the JWT token and returns the authenticated user.
 * Throws an UnauthorizedException if the token is invalid or the user is not found.
 *
 * @param req - The HTTP request object.
 * @returns The authenticated user.
 * @throws UnauthorizedException if the token is invalid or the user is not found.
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(
  Strategy,
  'validate_token',
) {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async validate(@Req() req: Request) {
    // throw error if token not exist
    const bearerToken =
      req.headers['authorization'] || `Bearer ${req.cookies['access_token']}`;
    if (!bearerToken) {
      throw new UnauthorizedException();
    }
    const token = bearerToken.split(' ')[1];

    // Verify expiration
    this.jwtService.verify(token, {
      secret: JWT_SECRET_TOKEN,
    });

    // Decode Token
    const decodeToken: any = this.jwtService.decode(token, {
      json: true,
    });
    if (!decodeToken) {
      throw new UnauthorizedException();
    }

    // Find user
    const user = await this.userService.findOne({
      _id: decodeToken._id,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    req['token'] = token;

    return user;
  }
}
