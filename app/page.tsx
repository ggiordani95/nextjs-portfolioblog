import Navbar from "components/Navbar";
import TechStack from "components/TechStack";
import SocialMedias from "components/SocialMedias";
import ActAreas from "components/ActAreas";

export default async function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center p-16 ">
      <div className="max-w-2xl">
        <Navbar />
        <ActAreas />
        <TechStack />
        <SocialMedias />
      </div>
    </main>
  );
}
