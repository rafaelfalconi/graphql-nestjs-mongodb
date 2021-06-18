import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Producto {
  @Field(() => ID, { nullable: true })
  id?: string;
  @Field((type) => Float, { nullable: true })
  precio?: number;

  @Field({ nullable: true })
  nombre?: string;

  @Field({ nullable: true })
  codigo?: string;
}
