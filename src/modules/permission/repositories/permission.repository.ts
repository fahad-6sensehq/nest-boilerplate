import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Permission, PermissionDocument } from "../entities/permission.entity";
import { Model } from "mongoose";
import { CreatePermissionDto } from "../dto/create-permission.dto";

@Injectable()
export class PermissionRepository {
    constructor(
        @InjectModel(Permission.name) private readonly permissionModel: Model<PermissionDocument>,
    ) { }

    async create(permission: CreatePermissionDto) {
        return await this.permissionModel.create(permission);
    }

    async findAll() {
        return await this.permissionModel.find().exec();
    }
}
