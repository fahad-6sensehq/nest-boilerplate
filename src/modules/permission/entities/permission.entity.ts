import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PermissionDocument = HydratedDocument<Permission>;

@Schema()
export class Permission {
    @Prop()
    name: String;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
