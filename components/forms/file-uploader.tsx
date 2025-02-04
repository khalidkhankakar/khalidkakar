'use client';
import Image from "next/image";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { BsCloudDownload } from "react-icons/bs";

interface Props{
  url?: string,
  fileOnChange: (file: File) => void
}

const ImageDropzone = ({url, fileOnChange}:Props) => {
  const [image, setImage] = useState<string>(url || "");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      fileOnChange(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  return (
    <div {...getRootProps()} className="h-64 flex flex-col border border-dashed border-gray-300 items-center justify-center gap-4">
    <input {...getInputProps()} />
     {!image ? (
      <div
      >
        <div className="flex flex-col items-center gap-y-4">
            <BsCloudDownload className="text-5xl" />
            <p className="text-center text-xs text-gray-300">Drag and drop your image here, or click to select</p>
        </div>
      </div>):(
        <div className="h-full w-full">

          <Image
            src={image}
            alt="Uploaded"
            className=" object-contain h-full w-full  rounded-lg "
            width={1000}
            height={1000}
        />
            </div>
      )}
    </div>
  );
};

export default ImageDropzone;
