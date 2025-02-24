import { Document } from "mongoose";
import { model, models, Schema } from "mongoose";


export interface IBlog {
    slug: string;
    title: string;
    content: string;
    image: string;
    description:string;
    tags: string[];
    views?: number;
    upvotes?: number;
}

export interface IBlogDoc extends IBlog, Document {}
const blogSchema = new Schema<IBlog>({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required:true},
    description: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref:'Tag' }],
    views: { type: Number, default: 0 },
    upvotes: { type: Number, default: 0 },
}, { timestamps: true })

const Blog = models?.Blog || model<IBlog>('Blog', blogSchema);

export default Blog