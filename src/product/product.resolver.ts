import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductInput } from './model/product.input';
import { Product } from './model/product.model';
import { ProductService } from './product.service';

@Resolver((of) => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => [Product])
  async products() {
    return await this.productService.getProducts();
  }

  @Query((returns) => Product)
  async product(@Args('id') id: string) {
    return await this.productService.getProductByID(id);
  }

  @Mutation((returns) => Product)
  async createProduct(@Args('product') product: ProductInput) {
    return await this.productService.createProduct(product);
  }

  @Mutation((returns) => Product)
  async editProduct(
    @Args('id') id: string,
    @Args('product') product: ProductInput,
  ) {
    return await this.productService.updateProduct(id, product);
  }

  @Mutation((returns) => Product)
  async deleteProduct(@Args('id') id: string) {
    return await this.productService.deleteProduct(id);
  }
}
