import { Metadata } from 'next';
import ImageCompressor from './image-compressor';

export const metadata: Metadata = {
  title: 'Image Compressor',
};

const ImageCompressorPage = () => {
  return (
    <>
      <ImageCompressor />
    </>
  );
};

export default ImageCompressorPage;