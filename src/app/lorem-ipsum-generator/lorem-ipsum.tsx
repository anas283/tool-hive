"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { useState } from "react";

const LoremIpsumGenerator = () => {

  const [loremIpsum, setLoremIpsum] = useState('');
  const [paragraphs, setParagraphs] = useState(1);
  const [copied, setCopied] = useState(false);

  const baseText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const generateLoremIpsum = () => {
    const result = [];
    for (let i = 0; i < paragraphs; i++) {
      // Shuffle the words to create a variation
      let words = baseText.split(" ");
      for (let j = words.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [words[j], words[k]] = [words[k], words[j]];
      }
  
      // Join the words to form a paragraph
      let paragraph = words.join(" ");
  
      // Slice it to the length of the base text to keep it reasonable
      paragraph = paragraph.slice(0, baseText.length);

      if (i === 0) {
        // Ensure the first paragraph starts with "Lorem ipsum"
        paragraph = "Lorem ipsum " + paragraph.slice(11); // Remove the first 11 characters to replace them
      }
  
      result.push(paragraph);
    }
    setLoremIpsum(result.join("\n\n"));
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(loremIpsum).then(() => {
      setCopied(true); // Set copied state to true when text is copied

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };
  
  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Lorem Ipsum Generator</h1>
      <h6 className="text-gray-500 text-sm text-center mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a 
        type specimen book.
      </h6>
      <div className="max-w-52 mx-auto mt-6 flex flex-col gap-2">
        <Label>Paragraph</Label>
        <Input
          value={paragraphs}
          onChange={(e) => setParagraphs(Number(e.target.value))}
        />
      </div>
      <div className="mt-6 flex justify-center">
        <Button onClick={() => generateLoremIpsum()}>
          Generate
        </Button>
      </div>

      {loremIpsum &&
        <div>
          <div className="sticky top-0 flex justify-end mt-3">
            <Button variant="ghost" className="flex flex-row gap-2"
              onClick={handleCopy}
            >
              <Copy className="w-4 h-4" />
              <h6>
                {copied ? "Copied!" : "Copy"}
              </h6>
            </Button>
          </div>
          <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-4 whitespace-pre-line">
            { loremIpsum }
          </div>
        </div>
      }
    </div>
  )
}

export default LoremIpsumGenerator;