'use server';

import { utapi } from "@/lib/uploadthing";

export const uploadImageToUploadthing = async (file: File): Promise<{url:string, status:number}> => {
    // const file = fromData.getAll('file');
    
    console.log(file)
    // const url = await utapi.uploadFiles(file);
    return {url:"https://avatars.githubusercontent.com/u/126089249?v=4" , status:200}
}
