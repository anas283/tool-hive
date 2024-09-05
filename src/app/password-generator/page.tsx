import { Metadata } from "next";
import PasswordGenerator from "./password-generator";

export const metadata: Metadata = {
  title: 'Password Generator',
};

const PasswordGeneratorPage = () => {
  return (
    <div className="max-w-md mx-auto min-h-[calc(100vh-57px)] flex items-center px-4 py-8">
      <PasswordGenerator />
    </div>
  );
}

export default PasswordGeneratorPage;