import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoResolver } from './producto.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoSchema } from './schema/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Producto', schema: ProductoSchema, collection: 'producto' },
    ]),
  ],
  providers: [ProductoService, ProductoResolver],
})
export class ProductoModule {}
