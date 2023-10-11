import Navbar from "components/Navbar";

function MainStructure({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex w-full min-h-screen flex-col items-center p-16">
      <div className="w-2xl">
        <Navbar />
        {children}
      </div>
    </main>
  );
}

export default MainStructure;
