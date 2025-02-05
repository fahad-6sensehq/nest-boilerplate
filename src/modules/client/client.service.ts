import { HttpStatus, Injectable } from '@nestjs/common';
import { ClientRepository } from './repositories/client.repository';
import { CreateClientDto } from './dtos/createClient.dto';
import { RolePermissions } from 'src/common/rolePermissions';
import { ExceptionHelper } from 'src/common/instances/ExceptionHelper';
import { RoleService } from '../role/role.service';

@Injectable()
export class ClientService {
    constructor(
        private readonly clientRepository: ClientRepository,
        private readonly roleService: RoleService
    ) { }

    async createClient(clientData: CreateClientDto) {
        const secret = 'secret';
        const clientObj = {
            ...clientData,
            secret
        }

        try {
            const client = await this.clientRepository.createClient(clientObj);
            const rolePermissions = RolePermissions()
            for (const role of rolePermissions) {
                await this.roleService.createRolesAndAddPermission(role.name, role.permissions)
            }

            return {
                client,
                rolePermissions
            }
        }
        catch (err) {
            ExceptionHelper.getInstance().defaultError(err?.message, 'something went wrong', HttpStatus.BAD_REQUEST)
        }
    }
}
