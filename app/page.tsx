import Navbar from "components/Navbar";
import TechStack from "components/TechStack";
import SocialMedias from "components/SocialMedias";
import ActAreas from "components/ActAreas";
import MainStructure from "components/MainStructure";

export default async function Home() {
  return (
    <MainStructure>
      <ActAreas />
      <TechStack />
      <SocialMedias />
    </MainStructure>
  );
}
