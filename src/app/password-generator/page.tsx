import { Metadata } from "next";
import PasswordGenerator from "./password-generator";

export const metadata: Metadata = {
  title: 'Password Generator',
};

const PasswordGeneratorPage = () => {
  return (
    <div>
      <PasswordGenerator />
    </div>
  );
}

export default PasswordGeneratorPage;