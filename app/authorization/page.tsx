"use client";
import { useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({
    username: "",
    pass: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      user.username == process.env.POST_USER &&
      user.pass == process.env.POST_PASS
    ) {
      window.location.href = "/creating-post";
    } else {
      setError("error");
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center text-white">
      <section className="flex w-[20rem] flex-col space-y-10">
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 ">
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Email or Username"
            className="w-full border-none bg-transparent outline-none  focus:outline-none"
          />
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 ">
          <input
            type="password"
            value={user.pass}
            required
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none focus:outline-none text-md"
          />
        </div>
        {error && <h1>Informações incorretas!</h1>}
        <button
          type="submit"
          className="transform   py-4 rounded-full font-bold"
          onClick={handleSubmit}
        >
          LOG IN
        </button>
      </section>
    </main>
  );
};

export default LoginPage;
