import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleRepository } from './repositories/role.repository';

@Injectable()
export class RoleService {
  constructor(
    private readonly roleRepository: RoleRepository,
  ) { }

  async create(createRoleDto: CreateRoleDto) {
    return await this.roleRepository.create(createRoleDto);
  }

  findAll() {
    return `This action returns all role`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  async createRolesAndAddPermission(name: string, permission: string[]) {
    const role = await this.roleRepository.find({ name });
    if (!role) {
      return await this.roleRepository.create({ name, status: 'active' });
    }
    return role;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
