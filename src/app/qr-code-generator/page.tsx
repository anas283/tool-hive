import { Metadata } from "next";
import QRCodeGenerator from "./qr-code-generator";

export const metadata: Metadata = {
  title: 'QR Code Generator',
};

const QRCodeGeneratorPage = () => {
  return (
    <>
      <QRCodeGenerator />
    </>
  );
};

export default QRCodeGeneratorPage;