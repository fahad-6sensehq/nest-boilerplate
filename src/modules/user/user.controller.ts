import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post()
    async create(@Body() body: CreateUserDto) {
        return await this.userService.create(body);
    }

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }
}
