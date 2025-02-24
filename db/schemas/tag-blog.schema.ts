import { model, models, Schema, Types } from "mongoose";

export interface ITagBlog {
  tag: Types.ObjectId;
  blog: Types.ObjectId;
}

export interface ITagBlogDoc extends ITagBlog, Document {}


const TagBlogSchema = new Schema<ITagBlog>(
  {
    tag: { type: Schema.Types.ObjectId, ref: "Tag", required: true },
    blog: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
  },
  { timestamps: true }
);

const TagBlog =
  models?.TagBlog || model<ITagBlog>("TagBlog", TagBlogSchema);

export default TagBlog;