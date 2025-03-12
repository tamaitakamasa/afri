import { getAllPosts } from "@/lib/note";
import { NoteArticle } from "@/types/note";
import Image from "next/image";

export default async function NoteList() {
  const noteData = await getAllPosts();
  const posts: NoteArticle[] = noteData.data.contents;
  console.log(posts);

  return (
    <div className="flex w-full flex-col gap-12">
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col gap-4">
          <h2 className="font-bold">
            <a
              href={post.noteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.name}
            </a>
          </h2>
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
          <div>
            <p className="text-sm">{post.body}</p>
          </div>
          <div className="flex gap-2">
            {post.hashtags.map((tag, index) => (
              <span key={index} className="text-sm">
                {tag.hashtag.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
