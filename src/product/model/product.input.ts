import { Field, Int, InputType} from '@nestjs/graphql';

@InputType()
export class ProductInput{
    @Field(type => Int, { nullable: true })
    price?: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    code?: string;
}