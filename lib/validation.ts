import z from "zod"

export const blogSchema = z.object({
    image :z.instanceof(File).optional(),
    title : z.string({
        message: "Title is required",
    })
    .min(3, "Title must be at least 3 characters long")
    .max(150, "Title must be at most 150 characters long"),
    description: z.string({
        message: "Description is required",
    }).min(20, "Description must be at least 20 characters long")
    .max(150, "Description must be at most 150 characters long"),
    tags: z.array(z.string())
    .min(1, "At least one tag is required")
    .max(5, "Maximum of 5 tags allowed"),
    content:z.string({
        message: "Blog content is required",
    })
})