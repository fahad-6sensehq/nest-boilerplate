import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Client, ClientDocument } from "../entities/client.entity";
import { Model } from "mongoose";

@Injectable()
export class ClientRepository {
    constructor(
        @InjectModel(Client.name)
        private readonly clientModel: Model<ClientDocument>,
    ) { }

    async createClient(client: any) {
        return await this.clientModel.create(client);
    }
}
