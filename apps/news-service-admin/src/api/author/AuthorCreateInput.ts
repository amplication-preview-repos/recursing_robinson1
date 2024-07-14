import { InputJsonValue } from "../../types";
import { NewsCreateNestedManyWithoutAuthorsInput } from "./NewsCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  authorImage?: InputJsonValue;
  name?: string | null;
  newsItems?: NewsCreateNestedManyWithoutAuthorsInput;
};
