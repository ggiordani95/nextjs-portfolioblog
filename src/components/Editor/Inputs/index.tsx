import useSortedElements from "context/sortedElements/useSortedElements";
import React, { useEffect, useRef, useState } from "react";

function TextEditorInputs({ tailwindStyle }: { tailwindStyle: string }) {
  const [topic, setTopic] = useState<any>({
    font: "normal",
    content: "",
    align: "start",
    tailwindStyle: tailwindStyle,
    index: 1,
  });

  const { changingTopics, sortedTopics }: any = useSortedElements();

  function formatter(Object: any) {
    return (
      <div className={`w-full flex flex-row justify-${Object.align}`}>
        <p className={`font-${Object.font} ${Object.tailwindStyle}`}>
          {Object.content}
        </p>
      </div>
    );
  }
  console.log(sortedTopics);
  return (
    <div className="flex flex-col justify-center ">
      <input
        className="text-zinc-600"
        type="text"
        placeholder="Texto"
        onChange={(e) => setTopic({ ...topic, content: e.target.value })}
      ></input>
      <div className="flex flex-row items-center gap-2">
        <button
          className={`p-2 ${
            topic.font === "normal" ? "bg-zinc-600" : "bg-transparent"
          }   rounded-lg`}
          onClick={() => setTopic({ ...topic, font: "normal" })}
        >
          Normal
        </button>
        <button
          className={`p-2 ${
            topic.font === "bold" ? "bg-zinc-600" : "bg-transparent"
          }   rounded-lg`}
          onClick={() => setTopic({ ...topic, font: "bold" })}
        >
          Bold
        </button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <button
          className={`p-2 ${
            topic.align === "start" ? "bg-zinc-600" : "bg-transparent"
          }   rounded-lg`}
          onClick={() => setTopic({ ...topic, align: "start" })}
        >
          Start
        </button>
        <button
          className={`p-2 ${
            topic.align === "center" ? "bg-zinc-600" : "bg-transparent"
          }   rounded-lg`}
          onClick={() => setTopic({ ...topic, align: "center" })}
        >
          Centered
        </button>
      </div>
    </div>
  );
}

export default TextEditorInputs;
