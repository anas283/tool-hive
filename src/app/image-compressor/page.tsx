import { Metadata } from 'next';
import ImageCompressor from './image-compressor';

export const metadata: Metadata = {
  title: 'Image Compressor',
};

const ImageCompressorPage = () => {
  return (
    <div className="max-w-2xl mx-auto min-h-[calc(100vh-57px)] flex items-center px-4 py-8">
      <ImageCompressor />
    </div>
  );
};

export default ImageCompressorPage;