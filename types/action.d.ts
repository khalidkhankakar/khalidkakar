import { IBlogDoc } from "@/db/schemas/blog.schema";

export type GetBlogType = Omit<IBlogDoc, 'tags'> & { tags: { _id: ObjectId; name: string }[]}