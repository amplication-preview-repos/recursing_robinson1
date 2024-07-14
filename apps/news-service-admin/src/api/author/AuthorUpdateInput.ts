import { InputJsonValue } from "../../types";
import { NewsUpdateManyWithoutAuthorsInput } from "./NewsUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  authorImage?: InputJsonValue;
  name?: string | null;
  newsItems?: NewsUpdateManyWithoutAuthorsInput;
};
