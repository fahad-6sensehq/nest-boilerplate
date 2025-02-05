import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Role, RoleDocument } from "../entities/role.entity";
import { Model } from "mongoose";

@Injectable()
export class RoleRepository {
    constructor(
        @InjectModel(Role.name) private readonly roleModel: Model<RoleDocument>
    ) { }

    async create(role: Role) {
        return await this.roleModel.create(role);
    }

    async find(query: any) {
        return await this.roleModel.findOne(query);
    }

    async createRolesAndAddPermission(name: string) {
        return await this.roleModel.create({ name: name, status: "active" });
    }
}