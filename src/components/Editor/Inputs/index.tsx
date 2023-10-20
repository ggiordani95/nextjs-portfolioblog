import useSortedElements from "context/sortedElements/useSortedElements";
import React, { useEffect, useRef, useState } from "react";

function TextEditorInputs({
  tailwindStyle,
  nullingComponent,
}: {
  tailwindStyle: string;
  nullingComponent: () => void;
}) {
  const [topic, setTopic] = useState<any>({
    font: "normal",
    content: "",
    align: "start",
    tailwindStyle: tailwindStyle,
    index: 1,
  });

  const { changingTopics, sortedTopics, currentIndex }: any =
    useSortedElements();

  function formatter(Object: any) {
    return (
      <div className={`w-full flex flex-row justify-${Object.align}`}>
        <p className={`font-${Object.font} ${Object.tailwindStyle}`}>
          {Object.content}
        </p>
      </div>
    );
  }
  console.log(sortedTopics.length);
  return (
    <div className="flex flex-col justify-center ">
      <input
        className="text-zinc-600"
        type="text"
        placeholder="Texto"
        onChange={(e) => {
          changingTopics(
            { ...topic, content: e.target.value },
            sortedTopics.length
          );
          setTopic({ ...topic, content: e.target.value });
        }}
      ></input>
      <div className="flex flex-row items-center gap-2">
        <button
          className={`p-2 ${
            topic.font === "normal" ? "bg-zinc-600" : "bg-transparent"
          }   rounded-lg`}
          onClick={() => {
            changingTopics({ ...topic, font: "normal" });
            setTopic({ ...topic, font: "normal" });
          }}
        >
          Normal
        </button>
        <button
          className={`p-2 ${
            topic.font === "bold" ? "bg-zinc-600" : "bg-transparent"
          }   rounded-lg`}
          onClick={() => {
            changingTopics({ ...topic, font: "bold" }, sortedTopics.length);
            setTopic({ ...topic, font: "bold" });
          }}
        >
          Bold
        </button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <button
          className={`p-2 ${
            topic.align === "start" ? "bg-zinc-600" : "bg-transparent"
          }   rounded-lg`}
          onClick={() => {
            changingTopics({ ...topic, align: "start" }, sortedTopics.length);
            setTopic({ ...topic, align: "start" });
          }}
        >
          Start
        </button>
        <button
          className={`p-2 ${
            topic.align === "center" ? "bg-zinc-600" : "bg-transparent"
          }   rounded-lg`}
          onClick={() => {
            changingTopics({ ...topic, align: "center" }, sortedTopics.length);
            setTopic({ ...topic, align: "center" });
          }}
        >
          Centered
        </button>
      </div>
      <button
        onClick={(e) => {
          nullingComponent();
        }}
      >
        Voltar
      </button>
    </div>
  );
}

export default TextEditorInputs;
