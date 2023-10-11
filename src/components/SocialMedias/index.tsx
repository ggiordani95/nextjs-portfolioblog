import React from "react";
import { socialmedias } from "./utils";
import { Social } from "./types";

function SocialMedias() {
  return (
    <div className="flex flex-col sm:flex-row mt-16 gap-4 items-center">
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="italic font-bold text-xl">3.</p>
        <p className="pr-2 w-full">
          Minhas redes{" "}
          <i>
            <b>sociais</b>
          </i>{" "}
          :
        </p>
      </div>
      {socialmedias.map((socialmedia: Social) => {
        return (
          <>
            <div
              key={socialmedia.id}
              className="flex flex-row  gap-2  items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 lg:backdrop-blur-lg dark:border-neutral-900 bg-dark:bg-zinc-900/30 dark:from-inherit   rounded-xl border bg-gray-700 lg:p-4 dark:bg-zinc-800/30"
            >
              {socialmedia.component}
              <p className="">{socialmedia.name}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default SocialMedias;
