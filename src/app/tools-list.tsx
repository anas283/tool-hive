import {
  Calculator,
  CaseSensitive,
  File,
  FileJson,
  Image,
  LetterText,
  ListTodo,
  NotebookPen,
  Palette,
  QrCode,
} from "lucide-react";

export const tools = [
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
  },
  {
    name: "Color Palette",
    icon: (
      <Palette className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "color-palette",
  },
  {
    name: "QR Code Generator",
    icon: (
      <QrCode className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "qr-code-generator",
  },
  {
    name: "JSON Formatter",
    icon: (
      <FileJson className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "json-formatter",
  },
];
