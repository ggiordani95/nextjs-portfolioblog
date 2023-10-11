import Image, { StaticImageData } from "next/image";

import Navbar from "components/Navbar";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import TechStack from "components/TechStack";
import SocialMedias from "components/SocialMedias";
import ActAreas from "components/ActAreas";
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

  return (
    <main className="flex w-full min-h-screen flex-col items-center p-16">
      <div className="min-w-[720px]">
        <Navbar />
        <ActAreas />
        <TechStack />
        <SocialMedias />
      </div>
    </main>
  );
}
