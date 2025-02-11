import { model, models, Schema } from "mongoose";


export interface BlogSchema {
    slug: string;
    title: string;
    content: string;
    image: string;
    description:string;
    tags: string[];
    views?: number;
    upvotes?: number;
}

const blogSchema = new Schema<BlogSchema>({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required:true},
    description: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref:'Tag' }],
    views: { type: Number, default: 0 },
    upvotes: { type: Number, default: 0 },
}, { timestamps: true })

const Blog = models?.Blog || model<BlogSchema>('Blog', blogSchema);

export default Blog