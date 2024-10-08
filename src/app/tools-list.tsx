import {
  Calculator,
  CaseSensitive,
  Code,
  FileJson,
  Image,
  ListTodo,
  LockKeyhole,
  NotebookPen,
  Palette,
  QrCode,
} from "lucide-react";

export const tools = [
  {
    name: "Tailwind Gradient Generator",
    icon: (
      <Code className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "tailwind-gradient-generator",
  },
  {
    name: "Password Generator",
    icon: (
      <LockKeyhole className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "password-generator",
  },
  {
    name: "QR Code Generator",
    icon: (
      <QrCode className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "qr-code-generator",
  },
  {
    name: "Color Palette",
    icon: (
      <Palette className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "color-palette",
  },
  {
    name: "JSON Formatter",
    icon: (
      <FileJson className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "json-formatter",
  },
  {
    name: "Word Counter",
    icon: (
      <Calculator className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "word-counter",
  },
  {
    name: "Lorem Ipsum Generator",
    icon: (
      <CaseSensitive className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "lorem-ipsum-generator",
  },
  {
    name: "Image Compressor",
    icon: <Image className="ease-in-out duration-150 group-hover:text-white" />,
    link: "image-compressor",
  },
  {
    name: "Notes",
    icon: (
      <NotebookPen className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "notes",
  },
  {
    name: "To-Do List",
    icon: (
      <ListTodo className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "todo-list",
  }
];
