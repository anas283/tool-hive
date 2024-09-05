'use client'

import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Copy } from 'lucide-react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generatePassword();
  }, [])

  useEffect(() => {
    setIsValid(includeUppercase || includeLowercase || includeNumbers || includeSymbols);
  }, [includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const generatePassword = () => {
    if (!isValid) return;

    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+{}[]|:;<>,.?/~`';

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };

  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
      
      <div className="space-y-2">
        <Label>Password Length: {length}</Label>
        <Slider
          min={6}
          max={30}
          step={1}
          value={[length]}
          onValueChange={(value) => setLength(value[0])}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="uppercase">Include Uppercase</Label>
          <Switch
            id="uppercase"
            checked={includeUppercase}
            onCheckedChange={setIncludeUppercase}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="lowercase">Include Lowercase</Label>
          <Switch
            id="lowercase"
            checked={includeLowercase}
            onCheckedChange={setIncludeLowercase}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="numbers">Include Numbers</Label>
          <Switch
            id="numbers"
            checked={includeNumbers}
            onCheckedChange={setIncludeNumbers}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="symbols">Include Symbols</Label>
          <Switch
            id="symbols"
            checked={includeSymbols}
            onCheckedChange={setIncludeSymbols}
          />
        </div>
      </div>

      {!isValid && (
        <Alert variant="destructive">
          <AlertDescription>
            Please select at least one option (uppercase, lowercase, numbers, or symbols).
          </AlertDescription>
        </Alert>
      )}

      <Button onClick={generatePassword} className="w-full" disabled={!isValid}>
        Generate Password
      </Button>

      <div className="space-y-2">
        <Label htmlFor="password">Generated Password</Label>
        <Input
          id="password"
          value={password}
          readOnly
          className="font-mono"
        />
      </div>

      <Button
        variant="outline"
        className="flex gap-2 w-full"
        onClick={handleCopy}
      >
        <Copy className="w-4 h-4" />
        <h6>
          {copied ? "Copied!" : "Copy Password"}
        </h6>
      </Button>
    </div>
  );
};

export default PasswordGenerator;