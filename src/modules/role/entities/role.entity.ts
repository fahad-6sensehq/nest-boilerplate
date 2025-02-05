import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type RoleDocument = Role & Document;

@Schema()
export class Role {
    @Prop({ required: true })
    name: string;

    @Prop()
    status: string
}

export const RoleSchema = SchemaFactory.createForClass(Role);
