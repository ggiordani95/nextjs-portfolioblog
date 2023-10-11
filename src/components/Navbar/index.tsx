import React from "react";
import Image from "next/image";
import me from "../../../public/assets/me.png";

function Navbar() {
  return (
    <section className="w-full flex flex-col gap-12 h-56 ">
      <div className="w-full flex flex-row  gap-4 items-center justify-between">
        <div className="flex flex-row gap-4 items-center  ">
          <div>
            <Image
              className="rounded-lg"
              src={me}
              width={60}
              height={60}
              alt="me"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-zinc-300">
              Gustavo Giordani
            </h2>
            <p className="italic text-sm font-light opacity-60">
              ggiordani1995@hotmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row-reverse font-light">
        <ul className="gap-4 flex flex-row">
          <li>
            <a
              href=""
              className="hover:text-zinc-400 duration-200 transition-all"
            >
              Sobre
            </a>
          </li>
          <li>
            <a href="" className="text-zinc-300 underline underline-offset-4">
              Portfolio
            </a>
          </li>
          <li>
            <a href="" className="text-zinc-300 underline underline-offset-4">
              Posts
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
