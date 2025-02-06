import { Injectable } from '@nestjs/common';
import { CreateRolePermissionDto } from './dto/create-role-permission.dto';
import { UpdateRolePermissionDto } from './dto/update-role-permission.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RolePermission, RolePermissionDocument } from './entities/role-permission.entity';

@Injectable()
export class RolePermissionService {
  constructor(
    @InjectModel(RolePermission.name)
    private readonly rolePermissionModel: Model<RolePermissionDocument>,
    // private readonly rolePermissionModel: Model<RolePermissionDocument>,
    // private readonly roleService: RoleService,
    // private readonly permissionService: PermissionService
  ) { }

  async create(createRolePermissionDto: CreateRolePermissionDto) {
    const rolePermissionObj = {
      roleId: createRolePermissionDto.roleId,
      permissionId: createRolePermissionDto.permissionId
    }

    const rolePermissionExists = await this.rolePermissionModel.find(rolePermissionObj);

    if (rolePermissionExists.length > 0) {
      return rolePermissionExists[0];
    }

    const rolePermission = await this.rolePermissionModel.create(rolePermissionObj);
    return rolePermission;
  }

  findAll() {
    return `This action returns all rolePermission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rolePermission`;
  }

  update(id: number, updateRolePermissionDto: UpdateRolePermissionDto) {
    return `This action updates a #${id} rolePermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} rolePermission`;
  }
}
