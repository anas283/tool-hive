import { Metadata } from "next";
import TailwindGradientGenerator from "./tailwind-gradient-generator";

export const metadata: Metadata = {
  title: 'Tailwind Gradient Generator',
};

const TailwindGradientGeneratorPage = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <TailwindGradientGenerator />
    </div>
  )
}

export default TailwindGradientGeneratorPage;