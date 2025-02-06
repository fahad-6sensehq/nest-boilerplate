import mongoose from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RolePermissionDocument = RolePermission & Document;

@Schema()
export class RolePermission {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
    roleId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' })
    permissionId: string;
}

export const RolePermissionSchema = SchemaFactory.createForClass(RolePermission);