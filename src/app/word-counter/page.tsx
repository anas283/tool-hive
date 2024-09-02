import { Metadata } from "next";
import WordCounter from "./word-counter";

export const metadata: Metadata = {
  title: 'Word Counter',
};

const WordCounterPage = () => {
  return (
    <>
      <WordCounter />
    </>
  );
};

export default WordCounterPage;