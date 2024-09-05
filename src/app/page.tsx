import Link from "next/link";
import { tools } from "./tools-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 max-w-5xl mx-auto px-4">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl text-slate-900 text-center font-bold leading-tight">
          Your Digital Toolbox, <br /> Reimagined
        </h1>
        <h5 className="text-slate-600 text-center text-sm max-w-lg mx-auto">
          Unlock the power of efficiency with our all-in-one digital toolkit.
          We've got everything you need to streamline your workflow and boost productivity.
        </h5>
      </div>

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
        {
          tools.map((tool, key) => {
            return (
              <Link href={tool.link} key={key} className="flex flex-col bg-white border-4 border-gray-100 p-4 gap-4 rounded-xl cursor-pointer group hover:border-gray-100">
                <div className="mx-auto bg-blue-100 rounded-full p-3 flex justify-center items-center ease-in-out duration-150 group-hover:bg-blue-500">
                  { tool.icon }
                </div>
                <h6 className="font-medium text-sm text-center ease-in-out duration-150 group-hover:text-blue-500">
                  { tool.name }
                </h6>
              </Link>
            )
          })
        }
      </div>
    </main>
  );
}
