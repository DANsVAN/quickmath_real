import { motion } from "framer-motion";
import { useState } from "react";

let cssButtonBase =
  "focus:outline-none text-purple-50 border-purple-50 border-4 bg-purple-300 hover:bg-purple-300 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-3  py-2 mb-2 w-5/6 bg-opacity-40 hover:text-purple-700 hover:border-purple-700 mx-4 flex justify-center";
let cssButtonActive =
  "focus:outline-none border-4 bg-purple-300 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-3  py-2 mb-2 w-5/6 text-purple-700 border-purple-700 mx-4 flex justify-center";

let cssButtonShowALLCorrectProblems = cssButtonBase;
let cssButtonShowALLProblems = cssButtonBase;
let cssButtonShowALLWrongProblems = cssButtonBase;
let listOfAllAnswers = [];
let listOfAllWrongAnswers = [];
let index = 0;
let listOfAllCorrectAnswers = [];
export default function ScorePage({ AnswerHistory, problemHistory }) {
  const [isActiveState, setIsActiveStat] = useState(false);

  let allAnswers = AnswerHistory.wrongAnswers + AnswerHistory.rightAnswers;
  let rightAnswersPercent = Math.trunc(
    (AnswerHistory.rightAnswers / allAnswers) * 100
  );
  let wrongAnswersPercent = 100 - rightAnswersPercent;

  if (isNaN(wrongAnswersPercent)) {
    wrongAnswersPercent = 0;
  }
  if (isNaN(rightAnswersPercent)) {
    rightAnswersPercent = 0;
  }

  const [showProblemsState, setShowProblemsState] = useState("");
  function ShowProblems(key) {
    if (key === "Show ALL Correct Problems") {
      if (cssButtonShowALLCorrectProblems == cssButtonActive) {
        setIsActiveStat(false);
        cssButtonShowALLCorrectProblems = cssButtonBase;
        cssButtonShowALLProblems = cssButtonBase;
        cssButtonShowALLWrongProblems = cssButtonBase;
      } else {
        setIsActiveStat(true);
        cssButtonShowALLCorrectProblems = cssButtonActive;
        cssButtonShowALLProblems = cssButtonBase;
        cssButtonShowALLWrongProblems = cssButtonBase;
      }
      index = 0;
      for (let answer of AnswerHistory.listOfRightAnswers) {
        let fraction = "/";
        if (answer.numerator == 0) {
          answer.numerator = "";
          answer.denominator = "";
          fraction = "";
        }

        let Aanswer = (
          <div className="text-xl" key={index}>
            ({index + 1}) {problemHistory.listOfRightProblems[index]} ={" "}
            {answer.wholeNumberAnswer}{" "}
            <span className="diagonal-fractions">
              {answer.numerator}
              {fraction}
              {answer.denominator}
            </span>
          </div>
        );
        listOfAllCorrectAnswers.push(Aanswer);
        index++;
      }

      setShowProblemsState(listOfAllCorrectAnswers);
      listOfAllCorrectAnswers = [];
    }
    if (key === "Show ALL Problems") {
      if (cssButtonShowALLProblems == cssButtonActive) {
        setIsActiveStat(false);
        cssButtonShowALLCorrectProblems = cssButtonBase;
        cssButtonShowALLProblems = cssButtonBase;
        cssButtonShowALLWrongProblems = cssButtonBase;
      } else {
        setIsActiveStat(true);
        cssButtonShowALLCorrectProblems = cssButtonBase;
        cssButtonShowALLProblems = cssButtonActive;
        cssButtonShowALLWrongProblems = cssButtonBase;
      }
      index = 0;
      for (let answer of AnswerHistory.listOfAnswers) {
        let fraction = "/";
        if (answer.numerator == 0) {
          answer.numerator = "";
          answer.denominator = "";
          fraction = "";
        }

        let Aanswer = (
          <div className="text-xl" key={index}>
            ({index + 1}) {problemHistory.listOfProblems[index]} ={" "}
            {answer.wholeNumberAnswer}{" "}
            <span className="diagonal-fractions">
              {answer.numerator}
              {fraction}
              {answer.denominator}
            </span>
          </div>
        );
        listOfAllAnswers.push(Aanswer);
        index++;
      }

      setShowProblemsState(listOfAllAnswers);
      listOfAllAnswers = [];
    }
    if (key === "Show ALL Wrong Problems") {
      if (cssButtonShowALLWrongProblems == cssButtonActive) {
        setIsActiveStat(false);
        cssButtonShowALLCorrectProblems = cssButtonBase;
        cssButtonShowALLProblems = cssButtonBase;
        cssButtonShowALLWrongProblems = cssButtonBase;
      } else {
        setIsActiveStat(true);
        cssButtonShowALLCorrectProblems = cssButtonBase;
        cssButtonShowALLProblems = cssButtonBase;
        cssButtonShowALLWrongProblems = cssButtonActive;
      }
      index = 0;
      for (let answer of AnswerHistory.listOfWrongAnswers) {
        let fraction = "/";
        if (answer.numerator == 0) {
          answer.numerator = "";
          answer.denominator = "";
          fraction = "";
        }

        let Aanswer = (
          <div className="text-xl" key={index}>
            ({index + 1}) {problemHistory.listOfWrongProblems[index]} ={" "}
            {answer.wholeNumberAnswer}{" "}
            <span className="diagonal-fractions">
              {answer.numerator}
              {fraction}
              {answer.denominator}
            </span>
          </div>
        );
        listOfAllWrongAnswers.push(Aanswer);
        index++;
      }
      setShowProblemsState(listOfAllWrongAnswers);
      listOfAllWrongAnswers = [];
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0, x: [5, 0, 5, 0] }}
      exit={{ opacity: 0, y: -60 }}
      className="text-center rounded-3xl pt-5 pb-5 text-lg bg-purple-300 bg-opacity-40 text-purple-50 border-purple-200 border-b-8  mx-8
    "
    >
      <h1 className="text-5xl">Your Score</h1>
      <div className=" flex justify-items-stretch justify-between px-4 pt-4 pb-2 text-lg mx-4">
        <h1 className="text-green-300 mx-4">
          Correct Answers <br></br>{" "}
          <div className="mt-2 mb-4"> {AnswerHistory.rightAnswers} </div>
        </h1>
        <h1 className="text-green-300 mx-4">
          Correct Percent <br></br>{" "}
          <div className="mt-2 mb-4"> {rightAnswersPercent}% </div>
        </h1>
        <h1>
          Total Answers <br></br>{" "}
          <div className="mt-2 mb-4"> {allAnswers} </div>
        </h1>
        <h1 className="text-red-300 mx-4">
          Wrong Percent <br></br>{" "}
          <div className="mt-2 mb-4"> {wrongAnswersPercent}% </div>
        </h1>
        <h1 className="text-red-300 mx-4">
          Wrong Answers <br></br>{" "}
          <div className="mt-2 mb-4"> {AnswerHistory.wrongAnswers} </div>
        </h1>
      </div>
      <div className=" flex justify-between container px-4 text-lg"></div>
      <div className="flex justify-between container">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => ShowProblems("Show ALL Correct Problems")}
          type="button"
          className={cssButtonShowALLCorrectProblems}
        >
          Show ALL Correct Problems
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => ShowProblems("Show ALL Problems")}
          type="button"
          className={cssButtonShowALLProblems}
        >
          Show ALL Problems
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => ShowProblems("Show ALL Wrong Problems")}
          type="button"
          className={cssButtonShowALLWrongProblems}
        >
          Show ALL Wrong Problems
        </motion.button>
      </div>
      {isActiveState ? (
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0, x: [5, 0, 5, 0] }}
          exit={{ opacity: 0, y: -60 }}
          className="overflow-y-auto h-64 rounded-3xlfocus:outline-none text-purple-50 border-purple-50 border-4 bg-purple-300 hover:bg-purple-300 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-3 m-4 mx-8 mb-2 bg-opacity-40 hover:text-purple-700 hover:border-purple-700"
        >
          {showProblemsState}
        </motion.div>
      ) : (
        <div></div>
      )}
    </motion.div>
  );
}
