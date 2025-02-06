import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleSchema } from './entities/role.entity';
import { PermissionModule } from '../permission/permission.module';
import { PermissionService } from '../permission/permission.service';
import { RolePermissionService } from '../role-permission/role-permission.service';
import { RolePermissionModule } from '../role-permission/role-permission.module';

@Module({
  imports: [
    PermissionModule,
    RolePermissionModule,
    MongooseModule.forFeature([
      { name: 'Role', schema: RoleSchema },
    ]),
  ],
  controllers: [RoleController],
  providers: [RoleService, PermissionService, RolePermissionService],
  exports: [RoleService, MongooseModule],
})
export class RoleModule { }
