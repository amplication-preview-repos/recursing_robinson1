import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NewsListRelationFilter } from "../news/NewsListRelationFilter";

export type AuthorWhereInput = {
  id?: StringFilter;
  authorImage?: JsonFilter;
  name?: StringNullableFilter;
  newsItems?: NewsListRelationFilter;
};
