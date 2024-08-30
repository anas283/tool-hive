import {
  Calculator,
  CaseSensitive,
  File,
  Image,
  LetterText,
  ListTodo,
  NotebookPen,
  Palette,
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
    name: "Word Generator",
    icon: (
      <LetterText className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "",
  },
  {
    name: "Lorem Ipsum Generator",
    icon: (
      <CaseSensitive className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "",
  },
  {
    name: "Image Compressor",
    icon: <Image className="ease-in-out duration-150 group-hover:text-white" />,
    link: "",
  },
  {
    name: "File Compressor",
    icon: <File className="ease-in-out duration-150 group-hover:text-white" />,
    link: "",
  },
  {
    name: "Notes",
    icon: (
      <NotebookPen className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "",
  },
  {
    name: "To-Do List",
    icon: (
      <ListTodo className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "",
  },
  {
    name: "Color Palette",
    icon: (
      <Palette className="ease-in-out duration-150 group-hover:text-white" />
    ),
    link: "",
  },
];
