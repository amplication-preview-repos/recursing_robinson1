import { JsonValue } from "type-fest";
import { News } from "../news/News";

export type Author = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  authorImage: JsonValue;
  name: string | null;
  newsItems?: Array<News>;
};
