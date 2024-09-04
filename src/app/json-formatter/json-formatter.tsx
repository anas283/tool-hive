"use client"

import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Copy } from 'lucide-react';

const JsonFormatterValidator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e: any) {
      setError('Invalid JSON: ' + e.message);
      setOutput('');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true); // Set copied state to true when text is copied

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">JSON Formatter/Validator</h1>
      <Textarea
        placeholder="Enter your JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="h-52"
      />
      <Button onClick={formatJson}>Format/Validate JSON</Button>
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {output && (
        <div className="relative">
          <Button
            variant="outline"
            className="absolute top-3 right-3 flex gap-2"
            onClick={handleCopy}
          >
            <Copy className="w-4 h-4" />
            <h6>
              {copied ? "Copied!" : "Copy"}
            </h6>
          </Button>
          <Textarea
            value={output}
            readOnly
            className="h-52"
          />
        </div>
      )}
    </div>
  );
};

export default JsonFormatterValidator;