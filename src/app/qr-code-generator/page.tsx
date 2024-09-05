import { Metadata } from "next";
import QRCodeGenerator from "./qr-code-generator";

export const metadata: Metadata = {
  title: 'QR Code Generator',
};

const QRCodeGeneratorPage = () => {
  return (
    <div className="max-w-2xl mx-auto min-h-[calc(100vh-57px)] flex justify-center items-center px-4 py-8">
      <QRCodeGenerator />
    </div>
  );
};

export default QRCodeGeneratorPage;