import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { RoleModule } from '../role/role.module';
import { RoleService } from '../role/role.service';
import { UserRoleService } from '../user-role/user-role.service';
import { PermissionService } from '../permission/permission.service';
import { RolePermissionService } from '../role-permission/role-permission.service';
import { PermissionModule } from '../permission/permission.module';
import { UserRoleModule } from '../user-role/user-role.module';
import { RolePermissionModule } from '../role-permission/role-permission.module';

@Module({
  imports: [
    RoleModule,
    UserRoleModule,
    PermissionModule,
    RolePermissionModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, RoleService, PermissionService, UserRoleService, RolePermissionService],
  exports: [UserService],
})
export class UserModule { }
