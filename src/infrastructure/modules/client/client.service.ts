import { Injectable } from '@nestjs/common';
import { ClientRepository } from './repositories/client.repository';
import { CreateClientDto } from './dtos/createClient.dto';

@Injectable()
export class ClientService {
    constructor(
        private readonly clientRepository: ClientRepository
    ) { }

    async createClient(clientData: CreateClientDto) {
        const secret = 'secret';
        const clientObj = {
            ...clientData,
            secret
        }
        const client = await this.clientRepository.createClient(clientObj);
    }
}
