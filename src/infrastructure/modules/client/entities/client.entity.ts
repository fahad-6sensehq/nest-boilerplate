import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ClientDocument = Client & Document;

@Schema()
export class Client {
    @Prop()
    name: string;

    @Prop()
    secret: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);