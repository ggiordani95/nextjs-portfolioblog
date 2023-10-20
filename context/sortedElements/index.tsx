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
    console.log(sortedTopics.length, sortedTopics);

    const topicFinded = sortedTopics?.findIndex(
      (element) => element.index === currentIndex
    );
    if (topicFinded) {
      setSortedTopics(
        sortedTopics?.splice(topicFinded, 1, { ...topic, index: currentIndex })
      );
    } else {
      if (sortedTopics.length === 0) {
        setSortedTopics([{ ...topic, index: 0 }]);
      } else {
        setSortedTopics([...sortedTopics, { ...topic, index: currentIndex }]);
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
