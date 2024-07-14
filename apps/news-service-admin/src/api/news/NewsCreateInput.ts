import { InputJsonValue } from "../../types";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type NewsCreateInput = {
  title?: string | null;
  story?: string | null;
  storyPicture?: InputJsonValue;
  author?: AuthorWhereUniqueInput | null;
};
