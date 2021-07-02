import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto, ProductoDocument } from './schema/producto.schema';
import { ProductoDto } from './model/productoDto.model';

@Injectable()
export class ProductoService {
  constructor(
    @InjectModel('Producto')
    private readonly productoModel: Model<ProductoDocument>,
  ) {}

  async getProductos(): Promise<Producto[]> {
    return await this.productoModel.find();
  }

  async getProductoPrice(id: string, descuento: number) {
    const producto = await this.productoModel.findById(id);
    const productoDto: ProductoDto = {};
    productoDto.nombre = producto.nombre;
    productoDto.codigo = producto.codigo;
    productoDto.precio = producto.precio;
    productoDto.iva = producto.precio * 0.12;
    productoDto.descuento = producto.precio * descuento;
    productoDto.precioFinal =
      productoDto.precio + productoDto.iva - productoDto.descuento;
    return productoDto;
  }
}
