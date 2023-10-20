import React from "react";
import Editor from "components/Editor/index";
import { SortedTopicsProvider } from "context/sortedElements";

async function Page() {
  return (
    <SortedTopicsProvider>
      <main className="mx-auto flex h-screen w-full items-center justify-center text-white">
        <Editor />
      </main>
    </SortedTopicsProvider>
  );
}

export default Page;
