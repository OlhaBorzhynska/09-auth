import { Note } from "@/types/note";
import { nextServer } from "./api";

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
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
