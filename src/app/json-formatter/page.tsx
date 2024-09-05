import { Metadata } from "next";
import JsonFormatterValidator from "./json-formatter";

export const metadata: Metadata = {
  title: 'JSON Formatter',
};

const JsonFormatterPage = () => {
  return (
    <div className="max-w-2xl mx-auto min-h-[calc(100vh-57px)] flex justify-center px-4 py-8">
      <JsonFormatterValidator />
    </div>
  );
}

export default JsonFormatterPage;