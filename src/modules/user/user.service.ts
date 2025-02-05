import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
    ) { }

    async create(body: CreateUserDto) {
        return await this.userRepository.create(body);
    }

    async findAll() {
        return await this.userRepository.findAll();
    }
}
