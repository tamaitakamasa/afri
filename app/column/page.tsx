import { PageLayout } from "@/components/layout/page-layout";
import { NoteListWithFilter } from "@/components/features/note/note-list-with-filter";
import { getAllPosts } from "@/lib/note";

// 動的レンダリングを強制
export const dynamic = 'force-dynamic';

export default async function Page() {
  const noteData = await getAllPosts();
  const posts = noteData.data.contents;

  return (
    <PageLayout title="Column">
      <NoteListWithFilter posts={posts} />
    </PageLayout>
  );
}
