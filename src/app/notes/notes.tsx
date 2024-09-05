"use client";

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Edit, Save, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

interface Note {
  id: number;
  title: string;
  content: string;
}

interface FormValues {
  title: string;
  content: string;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  const addNote: SubmitHandler<FormValues> = (data) => {
    setNotes([{ id: Date.now(), title: data.title, content: data.content }, ...notes]);
  };

  const updateNote: SubmitHandler<FormValues> = (data) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === editingNoteId ? { ...note, title: data.title, content: data.content } : note
      )
    );
    setEditingNoteId(null);
  };

  const deleteNote = (id: number) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const handleEditNote = (note: Note) => {
    setEditingNoteId(note.id);
  };

  const handleCancelEdit = () => {
    setEditingNoteId(null);
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Notes</h1>
        {/* Main form for adding notes */}
        <MainForm onSubmit={addNote} />
      </div>
      
      {/* List of notes with inline edit functionality */}
      <div className='mt-6'>
        {notes.map((note) => (
          <Card key={note.id} className="mb-4">
            <CardContent className='p-4 pt-2.5'>
              {editingNoteId === note.id ? (
                <EditForm
                  note={note}
                  onSubmit={updateNote}
                  onCancel={handleCancelEdit}
                />
              ) : (
                <div className="group">
                  <h2 className="font-semibold">{note.title}</h2>
                  <p className="text-sm whitespace-pre-wrap mt-3">{note.content}</p>
                  <div className="opacity-0 ease-in-out duration-200 group-hover:opacity-90">
                    <Button variant="outline" onClick={() => handleEditNote(note)} className="text-xs mr-2 h-fit px-2.5">
                      <Edit className="w-4 h-4 mr-2" /> Edit
                    </Button>
                    <Button variant="outline" onClick={() => deleteNote(note.id)} className="text-xs mt-2 h-fit px-2.5">
                      <Trash2 className="w-4 h-4 mr-2" /> Delete
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

interface MainFormProps {
  onSubmit: SubmitHandler<FormValues>;
}

const MainForm: React.FC<MainFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="mb-4">
      <Input
        placeholder="Title"
        {...register('title', { required: true })}
        className="mb-2"
      />
      <Textarea
        placeholder="Your note..."
        {...register('content', { required: true })}
        className="mb-2"
      />
      <Button type="submit">Add Note</Button>
    </form>
  );
};

interface EditFormProps {
  note: { id: number; title: string; content: string };
  onSubmit: SubmitHandler<FormValues>;
  onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ note, onSubmit, onCancel }) => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      title: note.title,
      content: note.content,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Title"
        {...register('title', { required: true })}
        className="mb-2"
      />
      <Textarea
        placeholder="Your note..."
        {...register('content', { required: true })}
        className="mb-2"
      />
      <Button type="submit" className="mr-2">
        <Save className="mr-2" /> Save
      </Button>
      <Button type="button" onClick={onCancel}>
        <X className="mr-2" /> Cancel
      </Button>
    </form>
  );
};

export default Notes;