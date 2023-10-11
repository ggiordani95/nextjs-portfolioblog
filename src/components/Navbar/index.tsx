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
    <section className="w-full flex flex-col gap-12 h-56 ">
      <div className="w-full flex flex-row  gap-4 items-center justify-between">
        <div className="flex flex-row gap-4 items-center  ">
          <div>
            <Image
              className="rounded-lg"
              src={me}
              width={48}
              height={48}
              alt="me"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-zinc-300">
              Gustavo Giordani
            </h2>
            <div className="flex flex-row  items-center">
              <p className="italic text-sm font-light opacity-60">
                Caxias do Sul, Brasil
              </p>
              <Image
                src={brazil}
                width={14}
                height={14}
                alt="brazil"
                className="ml-2"
                style={{ height: "auto", width: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
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
