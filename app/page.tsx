import Image, { StaticImageData } from "next/image";
import react from "../public/assets/React.png";
import reactnative from "../public/assets/ReactNative.png";
import nextjs from "../public/assets/nextjs.png";
import tailwindcss from "../public/assets/tailwindcss.png";
import typescript from "../public/assets/typescript.png";
import nodejs from "../public/assets/nodejs.png";
import Navbar from "components/Navbar";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
async function getPosts() {
  const res = await fetch("http://localhost:3000/api/getPosts", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getPosts();

  console.log(data);
  type TTech = {
    name: string;
    alt: string;
    image: StaticImageData;
  };

  const tecnologies: TTech[] = [
    {
      name: "React",
      image: react,
      alt: "React the Javascript Framework for Front-End",
    },

    {
      name: "tailwindcss",
      image: tailwindcss,
      alt: "React the Javascript Framework for Front-End",
    },

    {
      name: "Nextjs",
      image: nextjs,
      alt: "React the Javascript Framework for Front-End",
    },

    {
      name: "nodejs",
      image: nodejs,
      alt: "React the Javascript Framework for Front-End",
    },
    {
      name: "ReactNative",
      image: reactnative,
      alt: "React the Javascript Framework for Front-End",
    },
    {
      name: "typescript",
      image: typescript,
      alt: "React the Javascript Framework for Front-End",
    },
  ];

  return (
    <main className="flex w-full min-h-screen flex-col items-center p-16">
      <div className="min-w-[720px]">
        <Navbar />
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mt-16 gap-2 items-center justify-between">
            <div className="flex flex-row gap-2 items-center justify-center">
              <p className="italic font-bold text-xl">1.</p>
              <p className="pr-2 w-full">
                <i>Olá</i> ✋, atuo nas <b>aréas</b> de{""}
              </p>
            </div>
            <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 lg:backdrop-blur-lg dark:border-neutral-900 bg-dark:bg-zinc-900/30 dark:from-inherit   rounded-xl border bg-gray-700 lg:p-4 dark:bg-zinc-800/30">
              &#128187; Desenvolvimento Web
            </p>
            <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 lg:backdrop-blur-lg dark:border-neutral-900 bg-dark:bg-zinc-900/30 dark:from-inherit  rounded-xl border bg-gray-700 lg:p-4 dark:bg-zinc-800/30">
              📱 Desenvolvimento Mobile
            </p>
          </div>
          <div className="flex flex-row mt-16">
            <div className="flex flex-row gap-2 items-center justify-center">
              <p className="italic font-bold text-xl">2.</p>
              <p className="pr-2 w-full">
                Minha stack{" "}
                <i>
                  <b>favorita</b>
                </i>{" "}
                :{""}
              </p>
            </div>
            <div className="columns-3 max-w-xl ml-6">
              {tecnologies.map((tecnology: TTech) => {
                return (
                  <Image
                    key={tecnology.name}
                    src={tecnology.image}
                    alt={tecnology.alt}
                    style={{ width: "auto", height: "70px" }}
                  />
                );
              })}
            </div>
          </div>
        </div>
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
          <div className="flex flex-row  gap-2  items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 lg:backdrop-blur-lg dark:border-neutral-900 bg-dark:bg-zinc-900/30 dark:from-inherit   rounded-xl border bg-gray-700 lg:p-4 dark:bg-zinc-800/30">
            <IoLogoGithub size={18} color={"#d3d3d3"} />
            <p className="">Github</p>
          </div>

          <div className="flex flex-row  gap-2  items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 lg:backdrop-blur-lg dark:border-neutral-900 bg-dark:bg-zinc-900/30 dark:from-inherit   rounded-xl border bg-gray-700 lg:p-4 dark:bg-zinc-800/30">
            <IoLogoLinkedin size={18} color={"#d3d3d3"} />
            <p className="">Linkedin</p>
          </div>
          <div className="flex flex-row  gap-2  items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 lg:backdrop-blur-lg dark:border-neutral-900 bg-dark:bg-zinc-900/30 dark:from-inherit   rounded-xl border bg-gray-700 lg:p-4 dark:bg-zinc-800/30">
            <AiOutlineMail size={18} color={"#d3d3d3"} />
            <p className="">Email</p>
          </div>
        </div>
      </div>
    </main>
  );
}
