import { PageLayout } from "@/components/layout/page-layout";
import { NoteListWithFilter } from "@/components/features/note/note-list-with-filter";
import { getAllPosts } from "@/lib/note";

export default async function Page() {
  const noteData = await getAllPosts();
  const posts = noteData.data.contents;

  return (
    <PageLayout title="Column">
      <NoteListWithFilter posts={posts} />
    </PageLayout>
  );
}
