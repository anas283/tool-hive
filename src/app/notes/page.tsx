import { Metadata } from "next";
import Notes from "./notes";

export const metadata: Metadata = {
  title: 'Notes',
};

const NotesPage= () => {
  return (
    <>
      <Notes />
    </>
  );
};

export default NotesPage;