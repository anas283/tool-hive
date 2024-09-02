"use client"

import { useEffect, useState } from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ColorPalette = () => {
  const [colors, setColors] = useState<string[]>();

  useEffect(() => {
    refreshColors();
  }, [])

  const generateColors = () => {
    // 50% chance to generate random colors or shaded colors
    return Math.random() > 0.5 ? generateRandomColors() : generateShadedColors();
  }

  const generateRandomColors = () => {
    return Array.from({ length: 5 }, () =>
      `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
    );
  }

  const generateShadedColors = () => {
    const baseHue = Math.floor(Math.random() * 360); // Random hue
    const baseSaturation = 70; // Constant saturation
    const shades = 5; // Number of shades in the palette

    return Array.from({ length: shades }, (_, index) => {
      const lightness = 20 + index * (60 / (shades - 1)); // Lightness from 20% to 80%
      // return `hsl(${baseHue}, ${baseSaturation}%, ${lightness}%)`;
      return hslToHex(baseHue, baseSaturation, lightness);
    });
  }

  const hslToHex = (h: number, s: number, l: number): string => {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;
    let _r, _g, _b;

    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x; }
    _r = Math.round((r + m) * 255).toString(16).padStart(2, '0');
    _g = Math.round((g + m) * 255).toString(16).padStart(2, '0');
    _b = Math.round((b + m) * 255).toString(16).padStart(2, '0');

    return `#${_r}${_g}${_b}`;
  };

  const refreshColors = () => {
    setColors(generateColors());
  };

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
  };

  const getTextColor = (color: string): string => {
    // Remove the leading '#' if present
    const hex = color.startsWith('#') ? color.slice(1) : color;

    // Convert hex to RGB
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return white for dark colors and black for light colors
    return luminance > 0.5 ? 'black' : 'white';
  };

  return (
    <div>
      <div className="flex flex-col justify-center col-span-full mt-5">
        <h2 className="text-xl text-center font-bold">Color Palette</h2>
        <Button
          onClick={refreshColors}
          className="w-fit mx-auto flex mt-2"
        >
          Generate
        </Button>
      </div>
      <div className='mt-6 grid grid-cols-1 md:grid-cols-5 h-[calc(100vh-120px)]'>
        {colors?.map((color, index) => (
          <div key={index} className="relative p-4 flex justify-center items-center group" style={{ backgroundColor: color }}>
            <div className='flex flex-col gap-5'>
              <div className="text-white text-2xl text-center font-semibold mt-4 uppercase tracking-wider"
                style={{ color: getTextColor(color) }}
              >
                {color}
              </div>
              <button 
                onClick={() => copyToClipboard(color)} 
                className="flex flex-row items-center mx-auto gap-2 ease-in-out duration-200 opacity-0 group-hover:opacity-100"
              >
                <Copy size={20} color="white" />
                <span className='text-white'>Copy</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;