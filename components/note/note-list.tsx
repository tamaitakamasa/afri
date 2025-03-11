import { getAllPosts } from "@/lib/note";
import { NoteArticle } from "@/types/note";
import Image from "next/image";

export default async function NoteList() {
  const noteData = await getAllPosts();
  const posts: NoteArticle[] = noteData.data.contents;
  // console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <figure className="aspect-square max-w-[400px] relative">
            <Image
              src={post.eyecatch}
              alt={post.name}
              fill
							sizes="400px"
              style={{ objectFit: "cover" }}
            />
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
  );
}
