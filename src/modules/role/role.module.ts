import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleRepository } from './repositories/role.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleSchema } from './entities/role.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Role', schema: RoleSchema },
    ]),
  ],
  controllers: [RoleController],
  providers: [RoleService, RoleRepository],
  exports: [RoleService, RoleRepository, MongooseModule],
})
export class RoleModule { }
