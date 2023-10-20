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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function changingTopics(topic: Topic) {
    console.log(sortedTopics);
    const topicFinded = sortedTopics?.findIndex(
      (element) => element.index === currentIndex
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
        index: sortedTopics.length + 1,
      },
    ]);
  }

  function removingTopic() {
    sortedTopics.pop();
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
