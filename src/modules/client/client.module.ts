import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './entities/client.entity';
import { RoleService } from '../role/role.service';
import { RoleModule } from '../role/role.module';
import { PermissionModule } from '../permission/permission.module';
import { PermissionService } from '../permission/permission.service';
import { RolePermissionModule } from '../role-permission/role-permission.module';

@Module({
  imports: [
    RoleModule,
    PermissionModule,
    RolePermissionModule,
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  providers: [ClientService, RoleService],
  controllers: [ClientController],
  exports: [ClientService],
})
export class ClientModule { }
