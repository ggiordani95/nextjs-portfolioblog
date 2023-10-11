import { Post } from "@prisma/client";
import React from "react";
async function getPosts() {
  const res = await fetch("http://localhost:3000/api/getPosts", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const posts = await res.json();
  return posts;
}
async function Posts() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      {posts.map((post: Post) => {
        return (
          <React.Fragment key={post.id}>
            <div>
              <p className="text-2xl font-semibold tracking-tighter">
                {post.title}
                {post.authorId}
                {post.author.name}
              </p>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Posts;
