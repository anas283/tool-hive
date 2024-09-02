import ColorPalette from "./color-palette";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Color Palette',
};

const ColorPalettePage = () => {
  return (
    <>
      <ColorPalette />
    </>
  );
};

export default ColorPalettePage;