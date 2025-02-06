import { Module } from '@nestjs/common';
import { RolePermissionService } from './role-permission.service';
import { RolePermissionController } from './role-permission.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RolePermissionSchema } from './entities/role-permission.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RolePermission', schema: RolePermissionSchema }
    ])
  ],
  controllers: [RolePermissionController],
  providers: [RolePermissionService],
  exports: [RolePermissionService, MongooseModule]
})
export class RolePermissionModule { }
