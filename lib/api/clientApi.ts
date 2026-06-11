import { NewNote, Note } from "@/types/note";
import { nextServer } from "./api";
import { User } from "@/types/user";

// fetchNotes;
// fetchNoteById;
// createNote;
// deleteNote;
// register;
// login;
// logout;
// checkSession;
// getMe;
// updateMe;

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export async function fetchNotes(
  searchQuery: string,
  currentPage: number,
  searchTag?: string,
): Promise<NotesResponse> {
  const { data } = await nextServer.get<NotesResponse>(`/notes`, {
    params: {
      search: searchQuery,
      page: currentPage,
      tag: searchTag,
    },
  });
  return data;
}

export async function fetchNoteById(noteId: string): Promise<Note> {
  const { data } = await nextServer.get<Note>(`/notes/${noteId}`);
  return data;
}

export async function createNote(newNote: NewNote): Promise<Note> {
  const { data } = await nextServer.post<Note>(`/notes`, newNote);
  return data;
}

export async function deleteNote(noteId: string): Promise<Note> {
  const { data } = await nextServer.delete<Note>(`/notes/${noteId}`);
  return data;
}

export async function register(userData: RegisterRequest): Promise<User> {
  const { data } = await nextServer.post<User>(`/auth/register`, userData);
  return data;
}
