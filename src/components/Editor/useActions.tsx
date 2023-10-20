import React from "react";

function useActions({ context, setSelectedComponent, EditorComponents }: any) {
  function addingTopic(idComponent: number) {
    setSelectedComponent(EditorComponents[idComponent]);
    context.addingTopic();
  }
  function removingTopic() {
    setSelectedComponent(null);
    context.removingTopic();
  }

  function Formatter(Object: any) {
    return (
      <div className={`w-full flex flex-row justify-${Object.align}`}>
        <p className={`font-${Object.font} ${Object.tailwindStyle}`}>
          {Object.content}
        </p>
      </div>
    );
  }
  return { Formatter, addingTopic, removingTopic };
}

export default useActions;
