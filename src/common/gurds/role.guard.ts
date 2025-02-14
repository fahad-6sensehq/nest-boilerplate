// import { ExceptionHelper } from '@common/helpers/ExceptionHelper';
// import { NestHelper } from '@common/helpers/NestHelper';
// import { IRole } from '@modules/role/interfaces/role.interface';
// import { UsersService } from '@modules/users/user.service';
// import {
//     CanActivate,
//     ExecutionContext,
//     ForbiddenException,
//     HttpStatus,
//     Injectable,
//     UnauthorizedException,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { JwtService } from '@nestjs/jwt';
// import { appConfig } from '../../../configuration/app.config';

// @Injectable()
// export class RolesGuard implements CanActivate {
//     constructor(
//         private reflector: Reflector,
//         private jwt: JwtService,
//         private userService: UsersService
//     ) {}

//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const roles = this.reflector.get<string[]>('roles', context.getHandler());
//         if (!roles) {
//             return true;
//         }
//         // const request = context.switchToHttp().getRequest();
//         const headers = context.switchToHttp().getRequest().headers;
//         const au = headers.authorization;
//         if (!NestHelper.getInstance().isEmpty(au)) {
//             const token = au.split('Bearer ');
//             try {
//                 this.jwt.verify(token[1], { secret: appConfig.jwtAccessToken });
//             } catch (err) {
//                 ExceptionHelper.getInstance().defaultError('Unauthorized', 'unauthorized', HttpStatus.UNAUTHORIZED);
//             }

//             const payload: any = this.jwt.decode(token[1]);
//             if (NestHelper.getInstance().isEmpty(payload)) {
//                 throw new UnauthorizedException();
//             }
//             const user = await this.userService.findOneData(payload?.userId);
//             if (!user) {
//                 return false; // User is not authenticated; deny access
//             }
//             const permissions = user?.userRole?.rolePermissions?.permissions.map((e: IRole) => {
//                 return e.name;
//             });

//             const inScopes = roles.some((elem) => {
//                 return permissions.includes(elem);
//             });

//             if (!inScopes) {
//                 throw new ForbiddenException();
//             }
//         } else {
//             throw new UnauthorizedException();
//         }
//         return true;
//     }
// }
