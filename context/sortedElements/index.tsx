"use client";
import React, { createContext, useState } from "react";

const SortedTopicsContext = createContext({});

type Topic = {
  font: string;
  content: string;
  align: string;
  tailwindStyle?: string;
  index: number;
};

const SortedTopicsProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortedTopics, setSortedTopics] = useState<Topic[]>([]);

  function changingTopics(topic: Topic) {
    const topicFinded = sortedTopics?.findIndex(
      (element) => element.index === topic.index
    );
    if (topicFinded) {
      sortedTopics?.splice(topicFinded, 1, topic);
      setSortedTopics(sortedTopics);
    } else {
      const length = sortedTopics.length;
      if (length === 0) {
        const topicAdded = { ...topic, index: length };
        setSortedTopics([topicAdded]);
        return;
      }
    }
  }

  function addingTopic() {
    setSortedTopics([
      ...sortedTopics,
      {
        font: "normal",
        content: "",
        align: "start",
        index: sortedTopics.length === 0 ? 0 : sortedTopics.length + 1,
      },
    ]);
    console.log(sortedTopics);
  }

  function removingTopic() {
    sortedTopics.pop();
    console.log(sortedTopics);
  }

  return (
    <SortedTopicsContext.Provider
      value={{ sortedTopics, changingTopics, addingTopic, removingTopic }}
    >
      {children}
    </SortedTopicsContext.Provider>
  );
};

export { SortedTopicsContext, SortedTopicsProvider };
