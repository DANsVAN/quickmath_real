"use client";
import { useContext, useEffect } from "react";
import { globalContent } from "./Content";
import { getAvailableSigns } from "@/utils/mathgamefunc";
import { getRandomAvailableSign } from "@/utils/mathgamefunc";
import { getRandomNumbers } from "@/utils/mathgamefunc";
import { getAnswer } from "@/utils/mathgamefunc";
import { useState } from "react";
import MathCard from "./MathCard";
import { createContext } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import ScorePage from "./ScorePage";
import { createTimer } from "@/utils/mathgamefunc";
let totalTimeLeft = 0;
let problemNumberCounter = 0;
let wrongAnswers = 0;
let rightAnswers = 0;
let listOfRightAnswers = [];
let listOfWrongAnswers = [];
let listOfAnswers = [];
let lastAnswerCorrectness = undefined;
let listOfRightProblems = [];
let listOfWrongProblems = [];
let listOfProblems = [];
export default function MathGame(
  wholeNumberAnswerValue,
  numeratorValue,
  denominatorValue
) {
  const [GameOverState, setGameOverState] = useState(false);
  const [problemNumber, setProblemNumber] = useState(0);
  const [answerHistory, setAnswerHistory] = useState({
    problemNumberCounter: problemNumberCounter,
    wrongAnswers: wrongAnswers,
    rightAnswers: rightAnswers,
    listOfRightAnswers: listOfRightAnswers,
    listOfWrongAnswers: listOfWrongAnswers,
    listOfAnswers: listOfAnswers,
    lastAnswerCorrectness: lastAnswerCorrectness,
  });
  const [problemHistory, setProblemHistory] = useState({
    listOfRightProblems: listOfRightProblems,
    listOfWrongProblems: listOfWrongProblems,
    listOfProblems: listOfProblems,
  });
  ////////////////////needed for score page/////////////////////////////////////

  function getGameOverState(getGameOverState) {
    if (getGameOverState == !GameOverState) {
      setGameOverState(true);
    }
  }

  function nextProblem(Value) {
    for (let aValue in Value) {
      if (Value[aValue] === undefined) {
        Value[aValue] = 0;
      }
    }

    if (
      Answer.numerator == Value.numerator &&
      Answer.denominator == Value.denominator &&
      Answer.wholeNumberAnswer == Value.wholeNumber
    ) {
      rightAnswers++;
      listOfRightAnswers.push(Answer);
      listOfRightProblems.push(Problems);
      lastAnswerCorrectness = true;
    } else {
      wrongAnswers++;
      listOfWrongAnswers.push(Answer);
      listOfWrongProblems.push(Problems);
      lastAnswerCorrectness = false;
    }
    createContext;
    problemNumberCounter++;
    listOfAnswers.push(Answer);
    listOfProblems.push(Problems);
    setAnswerHistory({
      problemNumberCounter: problemNumberCounter,
      wrongAnswers: wrongAnswers,
      rightAnswers: rightAnswers,
      listOfRightAnswers: listOfRightAnswers,
      listOfWrongAnswers: listOfWrongAnswers,
      listOfAnswers: listOfAnswers,
      lastAnswerCorrectness: lastAnswerCorrectness,
    });
    setProblemHistory({
      listOfWrongProblems: listOfWrongProblems,
      listOfProblems: listOfProblems,
      listOfRightProblems: listOfRightProblems,
    });
    // listOfAnswers.push(givenAnswer);
    setProblemNumber(problemNumberCounter);
  }
  ////////////////////needed for score page/////////////////////////////////////
  let { gameData } = useContext(globalContent);

  const AvailableSigns = getAvailableSigns(gameData.signs);
  const pickedAvailableSigns = getRandomAvailableSign(AvailableSigns);
  const randomNumbers = getRandomNumbers(gameData.max, gameData.min);
  const AnswerAndProblems = getAnswer(
    randomNumbers[0],
    randomNumbers[1],
    pickedAvailableSigns
  );
  const Answer = AnswerAndProblems[0];
  const Problems = AnswerAndProblems[1];
  const [cardState, setCardState] = useState({
    pickedAvailableSigns: pickedAvailableSigns,
    randomNumbers: randomNumbers,
    Answer: Answer,
  });
  let [totalTimeLeftState, setTotalTimeLeftState] = useState(totalTimeLeft);

  <div>score</div>;
  return (
    <>
      {GameOverState ? (
        <ScorePage
          AnswerHistory={answerHistory}
          problemHistory={problemHistory}
        ></ScorePage>
      ) : (
        <>
          <motion.div>
            <MathCard
              // className="h-full flex items-center justify-center "
              randomNumber1={randomNumbers[0]}
              randomNumber2={randomNumbers[1]}
              pickedAvailableSigns={pickedAvailableSigns}
              numerator={Answer.numerator}
              wholeNumberAnswer={Answer.wholeNumberAnswer}
              denominator={Answer.denominator}
              key={problemNumber}
              nextProblem={nextProblem}
              AnswerHistory={answerHistory}
            ></MathCard>
          </motion.div>
          <div>
            <Footer
              answerHistory={answerHistory}
              time={gameData.time}
              getGameOverState={getGameOverState}
            ></Footer>
          </div>
        </>
      )}
    </>
  );
}
//className="h-full flex items-center justify-center "
