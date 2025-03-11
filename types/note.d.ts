export interface NoteArticle {
  id: number;
  name: string;
  publishAt: string;
  eyecatch: string;
	noteUrl: string;
  hashtags: NoteHashtag[];
}

export interface NoteHashtag {
  hashtag: {
    name: string;
  };
}

export interface NotesData {
  data: {
    contents: NoteArticle[];
    isLastPage: boolean;
    totalCount: number;
  };
}
