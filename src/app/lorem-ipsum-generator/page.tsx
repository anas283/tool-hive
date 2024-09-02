import { Metadata } from "next";
import LoremIpsumGenerator from "./lorem-ipsum";

export const metadata: Metadata = {
  title: 'Lorem Ipsum Generator',
};

const LoremIpsumGeneratorPage = () => {
  return (
    <>
      <LoremIpsumGenerator />
    </>
  )
}

export default LoremIpsumGeneratorPage;