export const EditorComponents: EditComponent[] = [
  {
    id: 0,
    name: "H1",
    tailwindStyle: "text-4xl",
    description: "Título",
    component: <h1 className="text-zinc-400 text-4xl">H1</h1>,
  },
  {
    id: 1,
    name: "H2",
    tailwindStyle: "text-2xl",
    description: "Sub-Título",
    component: <h2 className="text-zinc-400 text-2xl">H2</h2>,
  },
  {
    id: 2,
    name: "p",
    tailwindStyle: "text-md",
    description: "Parágrafo",
    component: <h2 className="text-zinc-400 text-md">p</h2>,
  },
  {
    id: 3,
    name: "Tailwind",
    tailwindStyle: "text-md",
    description: null,
    component: <p className="text-zinc-400">Tailwind</p>,
  },
  {
    id: 4,
    name: "Code",
    tailwindStyle: "text-md",
    description: null,
    component: <p className="text-zinc-400">Code Example</p>,
  },
];
