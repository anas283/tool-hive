import { Metadata } from "next";
import JsonFormatterValidator from "./json-formatter";

export const metadata: Metadata = {
  title: 'JSON Formatter',
};

const JsonFormatterPage = () => {
  return (
    <div>
      <JsonFormatterValidator />
    </div>
  );
}

export default JsonFormatterPage;