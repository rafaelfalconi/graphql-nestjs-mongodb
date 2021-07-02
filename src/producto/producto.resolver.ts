import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Producto } from './model/producto.model';
import { ProductoService } from './producto.service';
import { ProductoDto } from './model/productoDto.model';

@Resolver((of) => Producto)
export class ProductoResolver {
  constructor(private productoService: ProductoService) {}

  @Query((retuns) => [Producto])
  async productos() {
    return await this.productoService.getProductos();
  }

  @Query((retuns) => ProductoDto)
  async productoPrecio(
    @Args('id') id: string,
    @Args('descuento') descuento: number,
  ) {
    return await this.productoService.getProductoPrice(id, descuento);
  }
}
