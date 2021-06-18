import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop()
  precio: number;
  @Prop()
  nombre?: string;
  @Prop()
  codigo?: string;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
