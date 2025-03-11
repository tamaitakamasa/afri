import { getAllPosts } from "@/lib/note";
import { NoteArticle } from "@/types/note";
import Image from "next/image";

export default async function NoteList() {
  const noteData = await getAllPosts();
  const posts: NoteArticle[] = noteData.data.contents;
  // console.log(posts);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative flex">
        <div className="min-w-1/4 sticky top-0 h-fit py-24">
          <h2 className="text-2xl font-semibold">TEAMS</h2>
        </div>
        <div className="flex w-full flex-col gap-4">
          {posts.map((post) => (
            <div key={post.id}>
              <figure className="relative aspect-square max-w-[400px]">
                <a
                  href={post.noteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={post.eyecatch}
                    alt={post.name}
                    fill
                    sizes="400px"
                    style={{ objectFit: "cover" }}
                  />
                </a>
              </figure>
              <h2>
                <a
                  href={post.noteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.name}
                </a>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
