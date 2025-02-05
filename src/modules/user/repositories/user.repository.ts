import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dtos/createUser.dto';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>,
    ) { }

    async create(body: CreateUserDto): Promise<User> {
        return await this.userModel.create(body);
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().select('-password').exec();
    }
}
