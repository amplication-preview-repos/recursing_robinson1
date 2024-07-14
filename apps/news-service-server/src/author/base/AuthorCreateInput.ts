/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import {
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { NewsCreateNestedManyWithoutAuthorsInput } from "./NewsCreateNestedManyWithoutAuthorsInput";
import { Type } from "class-transformer";

@InputType()
class AuthorCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  authorImage?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => NewsCreateNestedManyWithoutAuthorsInput,
  })
  @ValidateNested()
  @Type(() => NewsCreateNestedManyWithoutAuthorsInput)
  @IsOptional()
  @Field(() => NewsCreateNestedManyWithoutAuthorsInput, {
    nullable: true,
  })
  newsItems?: NewsCreateNestedManyWithoutAuthorsInput;
}

export { AuthorCreateInput as AuthorCreateInput };