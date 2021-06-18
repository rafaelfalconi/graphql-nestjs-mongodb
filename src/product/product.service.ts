import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductInput } from './model/product.input';
import { Product, ProductDocument } from './schema/product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<ProductDocument>) {

    }

    async getProducts(): Promise<Product[]> {
        return await this.productModel.find();
    }

    async getProductByID(id: String): Promise<Product> {
        return await this.productModel.findById(id);
    }

    async createProduct(productDto: ProductInput): Promise<Product> {
        const product = new this.productModel(productDto);
        return product.save();
    }

    async deleteProduct(id: string): Promise<any> {
        const productDeleted = await this.productModel.findByIdAndDelete(id);
        return productDeleted;
    }

    async updateProduct(id: string, productDto: ProductInput): Promise<Product> {
        const productUpdate = await this.productModel.findByIdAndUpdate(
            id,
            productDto,
            { new: true },
        );
        productUpdate.save();
        return productUpdate;
    }


}
