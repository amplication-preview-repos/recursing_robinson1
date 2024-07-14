import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type NewsWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  story?: StringNullableFilter;
  storyPicture?: JsonFilter;
  author?: AuthorWhereUniqueInput;
};
