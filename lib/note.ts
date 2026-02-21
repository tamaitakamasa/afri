// lib/note.ts
import { NOTE_API_BASE_URL } from "@/constants/site";
import { NotesData } from "@/types/note";

export async function getAllPosts(): Promise<NotesData> {
  let page = 1;
  let allContents: NotesData["data"]["contents"] = [];
  let totalCount = 0;

  while (true) {
    const url = `${NOTE_API_BASE_URL}contents?kind=note&page=${page}`;
    const res = await fetch(url, { cache: "no-store" });
    const data: NotesData = await res.json();

    allContents = [...allContents, ...data.data.contents];
    totalCount = data.data.totalCount;

    if (data.data.isLastPage) break;
    page++;
  }

  return {
    data: {
      contents: allContents,
      isLastPage: true,
      totalCount,
    },
  };
}
