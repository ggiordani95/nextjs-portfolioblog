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
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Log In</div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Email or Username"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="password"
            value={user.pass}
            required
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>
        {error && <h1>Informações incorretas!</h1>}
        <button
          type="submit"
          className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
          onClick={handleSubmit}
        >
          LOG IN
        </button>
      </section>
    </main>
  );
};

export default LoginPage;
