import { Field, Float, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Product{

    @Field(() => ID,{ nullable: true })
    id?: string;
    @Field(type => Float, { nullable: true })
    price?: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    code?: string;

}