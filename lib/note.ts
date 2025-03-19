// lib/note.ts
import { NOTE_API_BASE_URL } from "@/constants/site";
import { NotesData } from "@/types/note";

export async function getAllPosts(): Promise<NotesData> {
  const url = `${NOTE_API_BASE_URL}/contents?kind=note&page=1`;
  const data = await fetch(url);
  const posts = await data.json();
  return posts;
}
