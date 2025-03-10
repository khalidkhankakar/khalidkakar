"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { blogSchema } from "@/lib/validation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FileUploader from "./file-uploader"
import TagCard from "../cards/tag-card"
import Editor from "../editor"
import { createBlog, editBlog } from "@/actions/blog.action"
import { Textarea } from "../ui/textarea"
import { useTransition } from "react"
import { Loader } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { JSONContent } from "novel"

interface Props{
  blogId?: string
  blogTitle?: string
  blogContent?: string
  blogTags?: any[]
  blogImage?: string
  blogDesc?:string
  isEdit?:boolean
}

const BlogForm = ({
  blogId,
  blogTitle,
  blogContent,
  blogTags,
  blogImage, 
  blogDesc,
  isEdit = false}:Props) => {

  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      image: undefined,
      title: blogTitle || "",
      description: blogDesc || "",
      // todo: fix this type 
      tags: blogTags || [],
      content: blogContent || "",
    },
  })

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, field: { value: string[] }) {
    if (e.key === 'Enter') {

      e.preventDefault();
      const inputTag = e.currentTarget.value.trim();
      if (inputTag && inputTag.length < 15 && !field.value.includes(inputTag)) {
        form.setValue('tags', [...field.value, inputTag]);
        e.currentTarget.value = '';
        form.clearErrors('tags');
      }
      else if (inputTag.length > 15) {
        form.setError('tags', {
          type: 'manual',
          message: 'Tag cannot exceed 15 characters.'
        });
      }
      else if (field.value.includes(inputTag)) {
        form.setError("tags", {
          type: "manual",
          message: "Tag already exists",
        });
      }

    }
  }
  const handleTagRemove = (tag: string, field: { value: string[] }) => {
    const newTags = field.value.filter((t) => t !== tag);

    form.setValue("tags", newTags);

    if (newTags.length === 0) {
      form.setError("tags", {
        type: "manual",
        message: "Tags are required",
      });
    }
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof blogSchema>) {
    const formData = new FormData();
    formData.append('image', values.image as File);
    formData.append('title', values.title);
    formData.append('tags', JSON.stringify(values.tags));
    formData.append('content', values.content);
    formData.append('description', values.description);
    startTransition(()=>{

      if(isEdit && blogId){
        console.log('yes')
        editBlog(blogId, formData).then((res)=>{
          toast(res?.message);
          // router.push('/blog') 
          return 
        }).catch((err)=>{
          toast(err.message)
        })
        return 
      }

      createBlog(formData).then((res)=>{
        toast(res.message);
        return router.push('/blog')
      }).catch((err)=>{
        toast(err.message)
      })
    }) 
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add your blog cover image</FormLabel>
              <FormControl>
                <FileUploader url={blogImage} fileOnChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Blog title here...</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Runtime of the Javascript"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add up to 5 tags</FormLabel>
              <FormControl>
                <div>
                  <Input placeholder="javascript" onKeyDown={(e) => handleKeyDown(e, field)}
                  />
                  {
                    <div className="flex my-2 w-full flex-wrap gap-2 mt-2">
                      {
                        field.value.length > 0 &&
                        field.value.map((tag, index) => (
                          <TagCard id={tag} name={tag} key={index} remove onRemove={() => handleTagRemove(tag, field)} />
                        ))
                      }
                    </div>
                  }
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brife blog description...</FormLabel>
              <FormControl>
                <Textarea placeholder="This is a blog about javascript" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Write your blog content here...</FormLabel>
              <FormControl>
                <Editor initialValue={field.value as any} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full  rounded-xl text-lg" >{isPending ? <Loader className="animate-spin" /> : "Create Blog"}</Button>
      </form>
    </Form>
  )
}

export default BlogForm
