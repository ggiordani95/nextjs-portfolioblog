"use client";
import React, { useState } from "react";
import TextEditorInputs from "./Inputs";
import useSortedElements from "context/sortedElements/useSortedElements";
import { EditorComponents } from "./utils";
import useActions from "./useActions";

function Editor() {
  const [selectedComponent, setSelectedComponent] =
    useState<EditComponent | null>(null);

  const context: any = useSortedElements();

  const { Formatter, addingTopic, removingTopic } = useActions({
    context,
    setSelectedComponent,
    EditorComponents,
  });

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

        <div className="w-[72rem] bg-zinc-900  h-full select-none ">
          {context.sortedTopics.map((topic: any) => (
            <React.Fragment key={topic.index}>
              <div className="w-full px-16">{Formatter(topic)}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Editor;
