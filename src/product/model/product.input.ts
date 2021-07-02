import { Field, Int, InputType, Float } from '@nestjs/graphql';

@InputType()
export class ProductInput {
  @Field((type) => Float, { nullable: true })
  price?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  code?: string;
}
