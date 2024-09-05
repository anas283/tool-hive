import { Metadata } from "next";
import Notes from "./notes";

export const metadata: Metadata = {
  title: 'Notes',
};

const NotesPage= () => {
  return (
    <div className="max-w-2xl mx-auto min-h-[calc(100vh-57px)] flex px-4 py-8">
      <Notes />
    </div>
  );
};

export default NotesPage;