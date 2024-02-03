"use client";
import { useState } from "react";
import { createContext } from "react";
export const globalContent = createContext();
export const lastAnswerCorrectnessContent = createContext();
export default function Content({ children }) {
  // let problemNumberCounter = 0;
  // let wrongAnswers = 0;
  // let rightAnswers = 0;
  // let listOfRightAnswers = [];
  // let listOfWrongAnswers = [];
  // let listOfAnswers = [];
  let lastAnswer = null;
  // const answerhistory = {
  //   problemNumberCounter: problemNumberCounter,
  //   wrongAnswers: wrongAnswers,
  //   rightAnswers: rightAnswers,
  //   listOfRightAnswers: listOfRightAnswers,
  //   listOfWrongAnswers: listOfWrongAnswers,
  //   listOfAnswers: listOfAnswers,
  // };

  const gamedata = {
    time: "",
    min: "",
    max: "",
    signs: ["", "", "", ""],
    valid: false,
  };
  const [lastAnswerCorrectnessContent, setLastAnswerCorrectnessContent] =
    useState(lastAnswer);
  const [gameData, setGameData] = useState(gamedata);
  return (
    <globalContent.Provider
      value={{
        gameData,
        setGameData,
        lastAnswerCorrectnessContent,
        setLastAnswerCorrectnessContent,
      }}
    >
      {children}
    </globalContent.Provider>
  );
}
