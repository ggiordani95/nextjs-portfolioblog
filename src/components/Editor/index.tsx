"use client";
import React, { useState } from "react";
import TextEditorInputs from "./Inputs";
import useSortedElements from "context/sortedElements/useSortedElements";

type EditComponent = {
  id: number;
  name: string;
  tailwindStyle: string;
  description: string | null;
  component: JSX.Element;
};

const EditorComponents: EditComponent[] = [
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

function Editor() {
  const [selectedComponent, setSelectedComponent] =
    useState<EditComponent | null>(null);

  const context: any = useSortedElements();

  function addingTopic(idComponent: number) {
    setSelectedComponent(EditorComponents[idComponent]);
    context.addingTopic();
  }
  function removingTopic() {
    setSelectedComponent(null);
    context.removingTopic();
  }

  return (
    <div className="flex flex-col w-full h-full bg-zinc-800">
      <div className="w-full h-24 bg-zinc-800 border-b-zinc-700 border border-t-0 border-l-0 border-r-0"></div>
      <div className="flex flex-row h-full">
        <div className="w-72 bg-zinc-700 h-full select-none flex flex-col">
          {!selectedComponent && (
            <div className="mt-4 gap-4 flex flex-col">
              <div className="flex flex-col gap-2">
                {EditorComponents.map((component) => (
                  <>
                    <button
                      onClick={() => addingTopic(component.id)}
                      key={component.id}
                    >
                      <div className="p-4 border mx-2 flex flex-1 justify-center items-center rounded-lg border-zinc-600 bg-zinc-800 flex-col gap-2 max-h-32">
                        {component.component}
                        {component.description && (
                          <p className="text-zinc-400 flex-1 text-xs">
                            {component.description}
                          </p>
                        )}
                      </div>
                    </button>
                  </>
                ))}
              </div>
            </div>
          )}
          {selectedComponent && (
            <>
              <button className="" onClick={removingTopic}>
                X
              </button>
              <TextEditorInputs
                tailwindStyle={selectedComponent.tailwindStyle}
                nullingComponent={() => setSelectedComponent(null)}
              />
            </>
          )}
        </div>

        <div className="w-[72rem] bg-zinc-900  h-full select-none "></div>
      </div>
    </div>
  );
}

export default Editor;
