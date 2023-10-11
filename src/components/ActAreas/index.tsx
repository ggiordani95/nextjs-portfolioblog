import React from "react";

function ActAreas() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row mt-16 gap-2 items-center justify-between">
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="italic font-bold text-xl">1.</p>
          <p className="pr-2 w-full">
            Atuo nas <b>aréas</b> de{""}
          </p>
        </div>
        <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 lg:backdrop-blur-lg dark:border-neutral-900 bg-dark:bg-zinc-900/30 dark:from-inherit   rounded-xl border bg-gray-700 lg:p-4 dark:bg-zinc-800/30">
          &#128187; Desenvolvimento Web
        </p>
        <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 lg:backdrop-blur-lg dark:border-neutral-900 bg-dark:bg-zinc-900/30 dark:from-inherit  rounded-xl border bg-gray-700 lg:p-4 dark:bg-zinc-800/30">
          📱 Desenvolvimento Mobile
        </p>
      </div>
    </div>
  );
}

export default ActAreas;
