"use client";
import React, { SetStateAction, createContext, useState } from "react";

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
    const topicIndex = sortedTopics.findIndex(
      (element) => element.index === currentIndex
    );
    console.log(topicIndex);

    const updatedTopics = [...sortedTopics];
    updatedTopics[topicIndex] = { ...topic, index: currentIndex };
    setSortedTopics(updatedTopics);
  }

  function addingTopic() {
    // No direct mutation
    if (sortedTopics.length === 0) {
      setSortedTopics([
        ...sortedTopics,
        {
          font: "normal",
          content: "",
          align: "start",
          index: currentIndex, // Perhaps this should just be 'sortedTopics.length'
        },
      ]);
      setCurrentIndex(currentIndex);
      return;
    }
    setSortedTopics([
      ...sortedTopics,
      {
        font: "normal",
        content: "",
        align: "start",
        index: currentIndex + 1, // Perhaps this should just be 'sortedTopics.length'
      },
    ]);
    setCurrentIndex(currentIndex + 1);
  }

  function removingTopic() {
    if (sortedTopics.length > 0) {
      const updatedTopics = sortedTopics.slice(0, sortedTopics.length - 1);
      setSortedTopics(updatedTopics);
    }
  }

  console.log(sortedTopics);
  return (
    <SortedTopicsContext.Provider
      value={{ sortedTopics, changingTopics, addingTopic, removingTopic }}
    >
      {children}
    </SortedTopicsContext.Provider>
  );
};

export { SortedTopicsContext, SortedTopicsProvider };
