import { Post } from "@prisma/client";
import MainStructure from "components/MainStructure";
import React from "react";
async function getPosts() {
  const base64Credentials = btoa(
    `${process.env.API_USERNAME}:${process.env.API_PASSWORD}`
  );
  const res = await fetch("http://localhost:3000/api/getPosts", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${base64Credentials}`,
    },
  });

  const posts = await res.json();
  return posts;
}
async function Posts() {
  const posts = await getPosts();
  console.log(posts);

  interface PostResponse extends Post {
    author: {
      name: string;
    };
  }

  return (
    <MainStructure>
      {Array.isArray(posts) &&
        posts.map((post: PostResponse) => {
          return (
            <React.Fragment key={post.id}>
              <div>
                <p className="text-2xl font-semibold tracking-tighter">
                  {post.title}
                  {post.authorId}
                  {post?.author?.name}
                </p>
              </div>
            </React.Fragment>
          );
        })}
    </MainStructure>
  );
}

export default Posts;
