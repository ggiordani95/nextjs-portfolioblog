import { Post } from "@prisma/client";
import MainStructure from "components/MainStructure";
import React from "react";
async function getPosts() {
  const base64Credentials = btoa(
    `${process.env.API_USERNAME}:${process.env.API_PASSWORD}`
  );
  const res = await fetch(`${process.env.BASE_URL}/api/get-posts`, {
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
              <div className="flex flex-row gap-2 items-center justify-center">
                <p className="text-2xl font-semibold tracking-tighter">
                  {post.title}
                </p>
                <h1 className="text-sm">{post.content}</h1>
              </div>
            </React.Fragment>
          );
        })}
    </MainStructure>
  );
}

export default Posts;
