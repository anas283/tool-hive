"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WordCounter = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  useEffect(() => {
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    const characters = text.length;
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '');
    const paragraphs = text.split('\n').filter(para => para.trim() !== '');

    setWordCount(words.length);
    setCharCount(characters);
    setSentenceCount(sentences.length);
    setParagraphCount(paragraphs.length);
  }, [text]);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Word Counter</h1>
      <textarea
        className="w-full h-40 p-2 border rounded mt-4"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-500 text-base font-normal">Words</CardTitle>
          </CardHeader>
          <CardContent>
            <h6 className="text-xl font-semibold">
              {wordCount}
            </h6>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-500 text-base font-normal">Characters</CardTitle>
          </CardHeader>
          <CardContent>
            <h6 className="text-xl font-semibold">
              {charCount}
            </h6>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-500 text-base font-normal">Sentences</CardTitle>
          </CardHeader>
          <CardContent>
            <h6 className="text-xl font-semibold">
              {sentenceCount}
            </h6>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-500 text-base font-normal">Paragraphs</CardTitle>
          </CardHeader>
          <CardContent>
            <h6 className="text-xl font-semibold">
              {paragraphCount}
            </h6>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WordCounter;