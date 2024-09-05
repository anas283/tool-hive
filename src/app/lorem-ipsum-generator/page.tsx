import { Metadata } from "next";
import LoremIpsumGenerator from "./lorem-ipsum";

export const metadata: Metadata = {
  title: 'Lorem Ipsum Generator',
};

const LoremIpsumGeneratorPage = () => {
  return (
    <div className="max-w-2xl mx-auto min-h-[calc(100vh-57px)] flex items-center px-4 py-8">
      <LoremIpsumGenerator />
    </div>
  )
}

export default LoremIpsumGeneratorPage;