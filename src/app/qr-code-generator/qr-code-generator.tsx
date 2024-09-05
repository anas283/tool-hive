"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { QRCodeCanvas } from 'qrcode.react';
import React, { useState } from 'react';

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [qrCodeText, setQRCodeText] = useState('');

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const generateQRCode = () => {
    setQRCodeText(inputText);
  };

  return (
    <div>    
      <h1 className="text-3xl text-center font-bold">QR Code Generator</h1>
      <div className="max-w-72 mx-auto mt-6 flex flex-col gap-2">
        <Input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text or URL"
        />
        <div className="mt-3 flex justify-center">
          <Button onClick={generateQRCode} className="w-full">
            Generate
          </Button>
        </div>
      </div>

      {qrCodeText && (
        <div className="mt-6 flex justify-center">
          <QRCodeCanvas value={qrCodeText} size={288} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;