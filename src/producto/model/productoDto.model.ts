import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductoDto {
  @Field({ nullable: true })
  nombre?: string;

  @Field({ nullable: true })
  codigo?: string;

  @Field((type) => Float, { nullable: true })
  precio?: number;

  @Field((type) => Float, { nullable: true })
  iva?: number;

  @Field((type) => Float, { nullable: true })
  descuento?: number;

  @Field((type) => Float, { nullable: true })
  precioFinal?: number;
}
