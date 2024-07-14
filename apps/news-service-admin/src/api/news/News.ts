import { JsonValue } from "type-fest";
import { Author } from "../author/Author";

export type News = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  story: string | null;
  storyPicture: JsonValue;
  author?: Author | null;
};
