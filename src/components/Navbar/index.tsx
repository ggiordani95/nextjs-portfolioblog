"use client";
import Image from "next/image";
import me from "../../../public/assets/me.png";
import brazil from "../../../public/assets/brazil.png";
import { navbarAnchors } from "./utils";
import { Anchors } from "./types";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();
  return (
    <section className="w-full flex flex-col gap-12 h-56" id="nav">
      <div className="w-full flex flex-row-reverse font-light">
        <ul className="gap-4 flex flex-row">
          {navbarAnchors.map((anchor: Anchors) => {
            return (
              <li key={anchor.id}>
                <a
                  href={anchor.href}
                  className={`hover:text-zinc-400 duration-200  transition-all active:text-blue-400 ${
                    pathname === anchor.href
                      ? "text-white"
                      : "underline text-zinc-400 "
                  }`}
                >
                  {anchor.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
