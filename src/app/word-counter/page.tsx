import { Metadata } from "next";
import WordCounter from "./word-counter";

export const metadata: Metadata = {
  title: 'Word Counter',
};

const WordCounterPage = () => {
  return (
    <div className="max-w-md mx-auto flex justify-center px-4 py-8">
      <WordCounter />
    </div>
  );
};

export default WordCounterPage;