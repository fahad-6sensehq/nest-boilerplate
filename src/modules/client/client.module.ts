import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientRepository } from './repositories/client.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './entities/client.entity';
import { RoleService } from '../role/role.service';
import { RoleModule } from '../role/role.module';
import { RoleRepository } from '../role/repositories/role.repository';

@Module({
  imports: [
    RoleModule,
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  providers: [ClientService, ClientRepository, RoleService, RoleRepository],
  controllers: [ClientController],
  exports: [ClientService],
})
export class ClientModule { }
