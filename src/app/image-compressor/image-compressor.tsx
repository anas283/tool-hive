"use client"

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const ImageCompressor = () => {
  const [images, setImages] = useState<File[]>([]);
  const [compressedImages, setCompressedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    setImages(acceptedFiles);
  };

  const handleImageCompression = async () => {
    setLoading(true);
    const compressedImagesPromises = images.map(async (image) => {
      const options = {
        maxSizeMB: 1, // Maximum file size in MB
        maxWidthOrHeight: 1024, // Max width/height
        useWebWorker: true, // Use Web Workers for better performance
        initialQuality: 0.8, // Initial quality setting
      };
      const compressedFile = await imageCompression(image, options);
      return imageCompression.getDataUrlFromFile(compressedFile);
    });

    const compressedResults = await Promise.all(compressedImagesPromises);
    setCompressedImages(compressedResults);
    setLoading(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div className="w-full">
      <h2 className="text-xl text-center font-bold">Image Compressor</h2>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 px-8 py-16 text-center cursor-pointer mt-3 rounded-lg"
      >
        <input {...getInputProps()} />
        <div className='flex justify-center'>
          <Upload size={30} className="text-gray-400" />
        </div>
        <p className="text-gray-500 text-sm mt-2">Drag & Drop images here, or click to select files</p>
      </div>
      {images.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Files to Compress:</h3>
          <ul className="list-disc list-inside">
            {images.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
          <Button
            onClick={handleImageCompression}
            className="mt-4"
            disabled={loading}
          >
            {loading ? 'Compressing...' : 'Compress Images'}
          </Button>
          {loading && <Progress className="mt-2" />}
        </div>
      )}
      {compressedImages.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Compressed Images:</h3>
          <div className="flex flex-col gap-4">
            {compressedImages.map((dataUrl, index) => (
              <div key={index} className="mt-2 flex flex-col gap-1">
                <img src={dataUrl} alt={`Compressed ${index}`} className="w-48 h-auto" />
                <a href={dataUrl} download={`compressed_${index + 1}.jpg`}>
                  <Button className="mt-2">
                    Download Compressed Image {index + 1}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCompressor;