import React from "react";
import Editor from "components/RichEditorText/index";

async function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center text-white">
      <section className="flex w-[20rem] flex-col space-y-10">
        <Editor />
      </section>
    </main>
  );
}

export default Page;
