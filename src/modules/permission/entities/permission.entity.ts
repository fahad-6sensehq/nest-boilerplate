import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PermissionDocument = Permission & Document;

@Schema()
export class Permission {
    @Prop()
    name: String;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);