import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleController } from './user-role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRoleSchema } from './entities/user-role.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserRole', schema: UserRoleSchema }
    ])
  ],
  controllers: [UserRoleController],
  providers: [UserRoleService],
  exports: [UserRoleService, MongooseModule]
})
export class UserRoleModule { }
